"use client";

import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll() {
  useEffect(() => {
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const container = document.querySelector("[data-scroll-container]");
      if (!container) return;

      const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
        multiplier: 1.0,
        lerp: 0.1,
      });

      window.locomotiveScroll = scroll;

      scroll.on('scroll', (args) => {
        const event = new CustomEvent('locomotive-scroll', { detail: { scroll: args } });
        window.dispatchEvent(event);
      });

      return () => {
        scroll.destroy();
        delete window.locomotiveScroll;
      };
    };

    initScroll();
  }, []);

  return null;
}

import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  return (
    <section className="relative box-border caret-transparent min-h-[600px] h-screen pt-36 pb-[220px] md:min-h-[1000px] md:pt-[204px] md:pb-[300px]">
      <HeroCarousel />
    </section>
  );
}

import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function FooterContact() {
  return (
    <div className="box-border caret-transparent text-center md:text-left">
      <h6 className="text-base font-black box-border caret-transparent tracking-[-0.48px] leading-4 text-center uppercase mb-2 font-venice_blvd md:text-lg md:tracking-[-0.54px] md:leading-[18px] md:text-left">
        Contact Us
      </h6>
      <p className="text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[16.8px] text-center pb-1 font-degular md:text-xl md:tracking-[-0.2px] md:leading-6 md:text-left">
        Phone: +1 (555) 123-4567
      </p>
      <p className="text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[16.8px] text-center pb-1 font-degular md:text-xl md:tracking-[-0.2px] md:leading-6 md:text-left">
        Email: hello@starmap.com
      </p>
      <div className="box-border caret-transparent gap-x-5 flex justify-center gap-y-5 text-center mt-4 md:justify-start md:text-left">
        <a href="#" className="box-border caret-transparent">
          <FaInstagram className="h-5 w-5" />
        </a>
        <a href="#" className="box-border caret-transparent">
          <FaFacebook className="h-5 w-5" />
        </a>
        <a href="#" className="box-border caret-transparent">
          <FaTiktok className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

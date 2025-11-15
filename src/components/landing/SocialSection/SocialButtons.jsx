import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

export default function SocialButtons() {
  const socials = [
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'Facebook', icon: FaFacebook, url: '#' },
    { name: 'TikTok', icon: FaTiktok, url: '#' }
  ];

  return (
    <ul className="items-center box-border caret-transparent gap-x-[5px] flex flex-wrap justify-center list-none max-w-none gap-y-[5px] w-full mb-[60px] mx-auto pl-0 md:gap-x-2.5 md:max-w-screen-lg md:gap-y-2.5 md:mb-[100px]">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <li key={index} className="box-border caret-transparent max-w-none min-w-[100px] md:max-w-[calc(33.3333%_-_40px)] md:min-w-[280px]">
            <button className="text-sm font-bold items-center bg-blue-700 caret-transparent inline-flex justify-center tracking-[-0.28px] leading-[14px] w-full p-3 rounded-lg font-degular md:text-xl md:justify-between md:tracking-[-0.4px] md:leading-5 md:p-4 md:rounded-xl">
              <div className="text-sm box-border caret-transparent tracking-[-0.28px] leading-[14px] w-full md:text-xl md:tracking-[-0.4px] md:leading-5">
                <div className="text-sm items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap md:justify-between">
                  <a href={social.url} className="items-center box-border caret-transparent flex text-nowrap">
                    <span className="items-center box-border caret-transparent flex text-nowrap">
                      <Icon className="box-border caret-transparent h-5 text-nowrap w-5 md:h-7 md:w-7" />
                      <label className="box-border caret-transparent block text-nowrap ml-2 md:ml-3">
                        {social.name}
                      </label>
                    </span>
                  </a>
                  <div className="items-center aspect-square bg-stone-50 box-border caret-transparent hidden justify-center min-h-0 min-w-0 text-nowrap w-[26px] ml-2 rounded-md md:flex md:min-h-[auto] md:min-w-[auto]">
                    <IoChevronForward className="text-blue-600" />
                  </div>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

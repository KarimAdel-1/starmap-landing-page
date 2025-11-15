import SocialButtons from './SocialButtons';
import SocialGallery from './SocialGallery';

export default function SocialSection() {
  return (
    <div className="text-stone-50 bg-blue-600 box-border caret-transparent text-center pt-[60px] pb-[460px] md:pt-[100px]">
      <div className="relative items-center box-border caret-transparent flex flex-col max-w-[1228px] w-full mx-auto px-2 md:px-10">
        <h6 className="text-xl font-black bg-blue-700 box-border caret-transparent tracking-[-0.6px] leading-4 uppercase mb-3 p-2 rounded-lg font-venice_blvd md:text-2xl md:tracking-[-0.72px] md:leading-6 md:mb-8 md:p-3 md:rounded-xl">
          Stay in Touch
        </h6>
        <h3 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] max-w-none uppercase mb-5 font-venice_blvd md:text-[62px] md:tracking-[-1.86px] md:leading-[49.6px] md:max-w-[800px] md:mb-8">
          Follow @StarmapEgypt For More
        </h3>
        <section className="box-border caret-transparent w-full">
          <SocialButtons />
        </section>
      </div>
      <div className="box-border caret-transparent">
        <SocialGallery />
      </div>
    </div>
  );
}

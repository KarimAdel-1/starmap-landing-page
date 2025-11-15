import FAQList from './FAQList';

export default function NewsSection() {
  return (
    <div className="box-border caret-transparent text-center my-[60px] md:my-[120px]">
      <div className="relative box-border caret-transparent max-w-[1728px] w-full mx-auto px-2 md:px-10">
        <h6 className="text-xl font-black box-border caret-transparent tracking-[-0.6px] leading-4 uppercase mb-3 font-venice_blvd md:text-2xl md:tracking-[-0.72px] md:leading-6 md:mb-8">
          Got Questions?
        </h6>
        <h3 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] max-w-none uppercase mb-5 font-venice_blvd md:text-[62px] md:tracking-[-1.86px] md:leading-[49.6px] md:max-w-[800px] md:mb-8 mx-auto">
          Frequently Asked Questions
        </h3>

        <div className="box-border caret-transparent mt-6 md:mt-10">
          <FAQList />
        </div>
      </div>
    </div>
  );
}

import MarqueeContent from './MarqueeContent';
import HowItWorksSection from '../HowItWorksSection/HowItWorksSection';

export default function MarqueeSection() {
  return (
    <section className="relative box-border caret-transparent mt-[-200px] max-w-[1728px] min-h-[830px] w-full mx-auto px-2 py-1.5 md:px-10 md:py-0">
      <div className="relative box-border caret-transparent z-10 overflow-hidden rounded-t-xl md:rounded-t-3xl">
        <MarqueeContent />
      </div>
      <HowItWorksSection />
    </section>
  );
}

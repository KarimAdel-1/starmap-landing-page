import StepCard from './StepCard';

export default function StepsGrid({ currentSlide }) {
  const translateValue = currentSlide * -100;
  
  return (
    <div className="box-border caret-transparent flex h-auto transition-transform duration-300 lg:h-[510px] lg:justify-center lg:gap-8 lg:translate-x-0" style={{ transform: `translateX(${translateValue}%)` }}>
      <div className="box-border caret-transparent basis-full shrink-0 min-w-full px-2 lg:basis-[30%] lg:min-w-[30%] lg:px-0">
        <StepCard
          title="Step 1"
          description="Enter your Time and Place that was special to you."
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/2c484f36845197e5e9e795a4c0a70cab7d1c5727-840x589.png?w=320&auto=format"
          imageAlt="Step 1"
          backgroundIconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-7.svg"
        />
      </div>
      <div className="box-border caret-transparent basis-full shrink-0 min-w-full px-2 lg:basis-[30%] lg:min-w-[30%] lg:px-0">
        <StepCard
          title="Step 2"
          description="Add a personal message."
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/ffb0f55a51a715389342e032e28b9e8537900b4c-840x587.png?w=320&auto=format"
          imageAlt="Step 2"
          backgroundIconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-7.svg"
        />
      </div>
      <div className="box-border caret-transparent basis-full shrink-0 min-w-full px-2 lg:basis-[30%] lg:min-w-[30%] lg:px-0">
        <StepCard
          title="Step 3"
          description="Choose Your Design"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/762d01b46e41d514b952fa3cc283c295497b8281-840x587.png?w=320&auto=format"
          imageAlt="Step 3"
          backgroundIconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-8.svg"
        />
      </div>
    </div>
  );
}

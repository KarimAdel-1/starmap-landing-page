import NewsCard from './NewsCard';

export default function DesktopNewsGrid() {
  return (
    <div className="box-border caret-transparent gap-x-0 hidden gap-y-0 text-left md:gap-x-1.5 md:flex md:gap-y-1.5">
      <NewsCard
        category="Latest News"
        categoryVariant="bg-amber-400"
        containerVariant="basis-16 grow mb-1.5"
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/cb538319cb184b21bc86099c9581d41b75f46636-1920x1080.jpg?w=650&auto=format"
        imageAlt="Young girl holding a box of her things"
        date="August 5, 2025"
        title="Our Small Story Wins Big At the Marketing Awards"
        description='The "Growing With You" campaign, highlighting the importance of family and connection, earned Silver and Bronze recognitions.'
        linkUrl="https://www.brars.com/news/brar-s-growing-with-you-oic-foods"
      />
      <NewsCard
        category="Company Updates"
        categoryVariant="bg-sky-400"
        containerVariant="basis-auto shrink mb-1.5 md:basis-16 md:shrink-0 md:mb-0"
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/a23e4092364f82e65bd626365b88055e27f3d1fe-2752x1850.jpg?w=650&auto=format"
        imageAlt="Brar's Team"
        imageObjectPosition="59%_50%"
        date="July 4, 2025"
        title="Helping More Kiddos Take Their First Steps"
        description="Brar's and Trexo Robotics partner up to donate pediatric mobility devices to clinics in Toronto and BC, marking the start of a long-term effort."
        linkUrl="https://www.brars.com/news/trexo-and-brar-s-come-together-to-help-more-kiddos-take-their-first-steps"
      />
      <NewsCard
        category="Product News"
        categoryVariant="bg-violet-300"
        containerVariant="basis-auto shrink"
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/fea7c5c0ab1ff688059fa57d6787286ae089f011-1000x1778.jpg?w=650&auto=format"
        imageAlt="Vikas holding product"
        imageObjectPosition="43%_31%"
        date="August 5, 2025"
        title="Brar's X Vikas Khanna"
        description="Brar's partners with Chef Vikas Khanna to spotlight how its traditional ghee complements modern cuisine, celebrating quality and authenticity."
        linkUrl="https://www.brars.com/news/brar-s-x-vikas-khanna"
      />
    </div>
  );
}

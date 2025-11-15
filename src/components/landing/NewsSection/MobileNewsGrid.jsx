import MobileNewsCard from './MobileNewsCard';

export default function MobileNewsGrid() {
  return (
    <div className="box-border caret-transparent gap-x-0 block gap-y-0 text-left md:gap-x-1.5 md:hidden md:gap-y-1.5">
      <MobileNewsCard
        categoryLabel="Latest News"
        categoryVariant="bg-amber-400"
        contentVariant="visible"
        cardBackgroundColor="bg-amber-400"
        date="August 5, 2025"
        title="Our Small Story Wins Big At the Marketing Awards"
        description='The "Growing With You" campaign, highlighting the importance of family and connection, earned Silver and Bronze recognitions.'
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/cb538319cb184b21bc86099c9581d41b75f46636-1920x1080.jpg?w=650&auto=format"
        imageAlt="Young girl holding a box of her things"
        articleUrl="https://www.brars.com/news/brar-s-growing-with-you-oic-foods"
      />
      <MobileNewsCard
        categoryLabel="Company Updates"
        categoryVariant="bg-sky-400"
        contentVariant="hidden"
        cardBackgroundColor="bg-sky-400"
        date="July 4, 2025"
        title="Helping More Kiddos Take Their First Steps"
        description="Brar's and Trexo Robotics partner up to donate pediatric mobility devices to clinics in Toronto and BC, marking the start of a long-term effort."
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/a23e4092364f82e65bd626365b88055e27f3d1fe-2752x1850.jpg?w=650&auto=format"
        imageAlt="Brar's Team"
        imageObjectPosition="object-[59%_50%]"
        articleUrl="https://www.brars.com/news/trexo-and-brar-s-come-together-to-help-more-kiddos-take-their-first-steps"
      />
      <MobileNewsCard
        categoryLabel="Product News"
        categoryVariant="bg-violet-300"
        contentVariant="hidden"
        cardBackgroundColor="bg-violet-300"
        date="August 5, 2025"
        title="Brar's X Vikas Khanna"
        description="Brar's partners with Chef Vikas Khanna to spotlight how its traditional ghee complements modern cuisine, celebrating quality and authenticity."
        imageUrl="https://cdn.sanity.io/images/krc73rcv/production/fea7c5c0ab1ff688059fa57d6787286ae089f011-1000x1778.jpg?w=650&auto=format"
        imageAlt="Vikas holding product"
        imageObjectPosition="object-[43%_31%]"
        articleUrl="https://www.brars.com/news/brar-s-x-vikas-khanna"
      />
    </div>
  );
}

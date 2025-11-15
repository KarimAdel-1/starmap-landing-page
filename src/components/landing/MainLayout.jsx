import HeroSection from '../landing/HeroSection/HeroSection';
import MarqueeSection from '../landing/MarqueeSection/MarqueeSection';
import BadgesSection from '../landing/BadgesSection/BadgesSection';
import AboutSection from '../landing/AboutSection/AboutSection';
import RecipesSection from '../landing/RecipesSection/RecipesSection';
import NewsSection from '../landing/NewsSection/NewsSection';
import CategoryMarquee from '../landing/CategoryMarquee/CategoryMarquee';
import SocialSection from '../landing/SocialSection/SocialSection';

export default function MainLayout() {
  return (
    <main className="box-border caret-transparent min-h-[1420px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent overflow-x-hidden overflow-y-auto">
          <HeroSection />
          <MarqueeSection />
          <BadgesSection />
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent"></div>
          </div>
          <AboutSection />
          {/* <RecipesSection /> */}
          <NewsSection />
          {/* <CategoryMarquee /> */}
          <SocialSection />
        </div>
      </div>
    </main>
  );
}

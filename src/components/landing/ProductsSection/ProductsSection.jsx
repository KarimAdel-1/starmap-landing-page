import DesktopTabs from './DesktopTabs';
import MobileTabs from './MobileTabs';
import ProductGrid from './ProductGrid';
import ProductCarouselControls from './ProductCarouselControls';

export default function ProductsSection() {
  return (
    <div className="relative bg-rose-100 box-border caret-transparent z-10 overflow-hidden -mt-5 pt-[46px] pb-[30px] rounded-xl md:pt-[60px] md:pb-10 md:rounded-3xl">
      <div className="box-border caret-transparent hidden justify-center mb-[30px] md:flex">
        <DesktopTabs />
      </div>
      <MobileTabs />
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <ProductGrid />
          <ProductCarouselControls />
        </div>
      </div>
    </div>
  );
}

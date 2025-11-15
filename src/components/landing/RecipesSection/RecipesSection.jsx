import RecipeGrid from './RecipeGrid';
import RecipeCarouselControls from './RecipeCarouselControls';

export default function RecipesSection() {
  return (
    <section className="box-border caret-transparent w-full py-[60px] md:py-[120px]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-none text-center mx-auto md:max-w-[1000px]">
        <h6 className="text-xl font-black box-border caret-transparent tracking-[-0.6px] leading-4 uppercase mb-3 font-venice_blvd md:text-2xl md:tracking-[-0.72px] md:leading-6 md:mb-8">
          Recipes
        </h6>
        <h3 className="text-[56px] font-black box-border caret-transparent tracking-[-2px] leading-[44.8px] uppercase mx-auto pb-3 font-venice_blvd md:text-[100px] md:tracking-[-3px] md:leading-[80px] md:pb-8">
          From Our Kitchen To Yours
        </h3>
        <a
          href="https://www.brars.com/recipes"
          className="box-border caret-transparent block"
        >
          <button className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent flex leading-[normal] w-fit px-4 py-3 rounded-lg font-arial">
            <div className="box-border caret-transparent">
              <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                View More{" "}
                <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                  <span className="box-border caret-transparent block h-3/6 text-nowrap">
                    <img
                      src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-2.svg"
                      alt="caret-almost-black"
                      className="box-border caret-transparent h-full text-nowrap"
                    />
                  </span>
                </div>
              </div>
            </div>
          </button>
        </a>
      </div>
      <div className="box-border caret-transparent mt-[50px]">
        <div className="box-border caret-transparent">
          <RecipeGrid />
          <RecipeCarouselControls />
        </div>
      </div>
    </section>
  );
}

import RecipeCard from './RecipeCard';

export default function RecipeGrid() {
  return (
    <div className="box-border caret-transparent flex translate-x-[-209px]">
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/samosa-chaat-cups"
          bgColor="bg-amber-400"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-11.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/c0ed0a68805eab9c475df20ed8c67b65e10fb6bf-982x1320.png?w=816&auto=format"
          imageAlt="Chaat Cups"
          imageObjectPosition="object-[50%_58%]"
          prepTime="10 min"
          tags={[
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
          ]}
          title="Samosa Chaat Cups"
        />
      </div>
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/mango-rasmalai-milkshake"
          bgColor="bg-sky-500"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-12.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/424f73cbb552518b86e15bbb5a14964a8115f5a9-1576x1390.png?w=816&auto=format"
          imageAlt="Mango Rasmalai Milkshake"
          imageObjectPosition="object-[39%_40%]"
          prepTime="6 min"
          tags={[
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
          ]}
          title="Mango Rasmalai Milkshake"
        />
      </div>
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] mx-[1%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/protein-dahi-bowl"
          bgColor="bg-violet-300"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-13.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/2f0fba3e609f785bbbc6b3c4d8cd63af2099e706-722x726.png?w=816&auto=format"
          imageAlt="Bowl"
          imageObjectPosition="object-[58%_40%]"
          prepTime="15 min"
          tags={[
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
          ]}
          title="Protein Dahi Bowl"
          scale="scale-[1.1px]"
        />
      </div>
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/grilled-peri-peri-paneer-with-cheesy-garlic-sauce-and-rice"
          bgColor="bg-sky-500"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-13.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/1ead7d89884d63891472d9159fd97a85c9a4c928-968x840.png?w=816&auto=format"
          imageAlt="Paneer"
          prepTime="40 min"
          tags={[
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
          ]}
          title="Grilled Peri Peri Paneer with Cheesy Garlic Sauce & Rice"
        />
      </div>
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/loaded-veggie-burger-bowl"
          bgColor="bg-pink-900"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-11.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/2996c053c2afc991934f6ac68784a26a1abda95c-1364x1260.png?w=816&auto=format"
          imageAlt="Veggie Bowl"
          prepTime="20 min"
          tags={[
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-11.svg",
            },
          ]}
          title="Loaded Veggie Burger Bowl"
          textColor="text-zinc-100"
        />
      </div>
      <div className="box-border caret-transparent basis-[73%] shrink-0 min-w-[73%] px-2 md:basis-[30%] md:min-w-[30%] md:px-4">
        <RecipeCard
          href="https://www.brars.com/recipes/ghee-podi-dosa"
          bgColor="bg-violet-300"
          iconUrl="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-13.svg"
          imageUrl="https://cdn.sanity.io/images/krc73rcv/production/0a24f59006fb5aee85e33a66c6c9cffedcdc4e24-968x910.png?w=816&auto=format"
          imageAlt="Ghee"
          prepTime="20 min"
          tags={[
            {
              label: "High in Protein",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
            {
              label: "Vegan",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
            {
              label: "Vegetarian",
              checkmarkIcon:
                "https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-10.svg",
            },
          ]}
          title="Ghee Podi Dosa"
        />
      </div>
    </div>
  );
}

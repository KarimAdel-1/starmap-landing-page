import React from 'react';

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Flexilight Classic Book Light',
      variant: 'Red',
      price: '£8.99',
      image: '/images/flexilight-red.jpg'
    },
    {
      id: 2,
      name: 'Flexilight Classic Book Light',
      variant: 'Flamingo',
      price: '£8.99',
      image: '/images/flexilight-flamingo.jpg'
    },
    {
      id: 3,
      name: 'Flexilight Classic Book Light',
      variant: 'Pink Flowers',
      price: '£8.99',
      image: '/images/flexilight-pink-flowers.jpg'
    },
    {
      id: 4,
      name: 'Flexilight Classic Book Light',
      variant: 'Soccer',
      price: '£8.99',
      image: '/images/flexilight-soccer.jpg'
    }
  ];

  return (
    <section className="px-5 md:px-12 mb-20 md:mb-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Others bought
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.variant.toLowerCase().replace(' ', '-')}`}
              className="group no-underline"
            >
              <div className="aspect-square bg-blue-400 rounded-lg overflow-hidden mb-3 relative flex items-center justify-center">
                <span className="text-white text-xl font-bold">{product.variant}</span>
                
                <button className="absolute bottom-2 left-2 right-2 md:bottom-5 md:left-5 md:right-5 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-black hover:bg-yellow text-white hover:text-black rounded-full px-4 py-2 text-sm">
                  Add To Bag
                </button>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm md:text-base">{product.name}</h3>
                <p className="text-xs md:text-sm text-gray-600">{product.variant}</p>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

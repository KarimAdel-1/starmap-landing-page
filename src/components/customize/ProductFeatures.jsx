import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      title: 'Personalized & Unique',
      description: 'Each star map is custom-made to show the exact alignment of stars on your chosen date and location. A truly one-of-a-kind piece that captures your special moment forever.',
      image: '/images/feature-personalized.jpg'
    },
    {
      title: 'Museum Quality',
      description: 'Printed on premium art matte paper using archival inks that resist fading. Your star map will maintain its beauty for generations to come.'
    },
    {
      title: 'Multiple Layouts',
      description: 'Choose from Portrait, Landscape, or Square formats to perfectly fit your space. Add optional frames in various finishes to complete the look.'
    },
    {
      title: 'Perfect Gift',
      description: 'Celebrate birthdays, anniversaries, weddings, or any meaningful moment. A thoughtful gift that shows you care about preserving precious memories.'
    }
  ];

  return (
    <section className="px-5 md:px-12 py-20 bg-white w-full">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What you'll love
        </h2>
        
        {/* Mobile: Single column */}
        <div className="md:hidden space-y-6">
          <div className="rounded-lg overflow-hidden bg-blue-700 flex items-center justify-center min-h-[300px]">
            <span className="text-white text-4xl font-bold">Feature Image</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg p-5 relative min-h-[200px] flex flex-col"
                style={{ backgroundColor: '#F4F2F0' }}
              >
                <h3 className="text-lg font-bold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: Image in row, features 2 per row */}
        <div className="hidden md:block lg:hidden space-y-6">
          <div className="rounded-lg overflow-hidden bg-blue-700 flex items-center justify-center min-h-[400px]">
            <span className="text-white text-4xl font-bold">Feature Image</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg p-5 relative min-h-[200px] flex flex-col"
                style={{ backgroundColor: '#F4F2F0' }}
              >
                <h3 className="text-lg font-bold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Image left, features grid right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden bg-blue-700 flex items-center justify-center min-h-[500px]">
            <span className="text-white text-4xl font-bold">Feature Image</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg p-5 relative min-h-[200px] flex flex-col"
                style={{ backgroundColor: '#F4F2F0' }}
              >
                <h3 className="text-lg font-bold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

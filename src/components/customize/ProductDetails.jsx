import React, { useState } from 'react';

const ProductDetails = ({ description, materials, dimensions, weight }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const details = [
    { id: 'materials', title: 'Materials', content: materials },
    { id: 'dimensions', title: 'Dimensions', content: dimensions },
    { id: 'weight', title: 'Weight', content: weight }
  ];

  return (
    <section className="px-5 md:px-12 py-20 md:py-32 w-full">
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl mb-12 text-center">
          {description}
        </h3>
        
        <div className="border-t border-dashed border-gray-300 pt-12">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-9">
              <h4 className="text-lg font-medium mb-6">Product details</h4>
            </div>
            
            <div className="md:col-span-3">
              <ul className="space-y-0">
                {details.map((detail) => (
                  <li key={detail.id} className="border-t border-b border-dashed border-gray-300">
                    <button
                      onClick={() => toggleSection(detail.id)}
                      className="w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                    >
                      <span className="text-sm">{detail.title}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform ${
                          openSection === detail.id ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M10 8.77L6.06 12.71L5.29 11.94L10 7.23L14.71 11.94L13.94 12.71L10 8.77Z"/>
                      </svg>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openSection === detail.id ? 'max-h-40' : 'max-h-0'
                      }`}
                    >
                      <div className="pb-6 pt-3">
                        <p className="text-sm text-gray-600">{detail.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

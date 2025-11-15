import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'Beautiful and meaningful!',
      content: 'Ordered this for our anniversary and it turned out absolutely stunning. The quality is amazing and seeing the exact stars from our wedding night brings back so many memories. Highly recommend!',
      author: 'Sarah M.',
      rating: 5
    },
    {
      id: 2,
      title: 'Perfect gift',
      content: 'Bought this as a birthday gift for my mom showing the night sky when she was born. She cried when she opened it! The print quality is excellent and the frame option made it ready to hang.',
      author: 'James T.',
      rating: 5
    },
    {
      id: 3,
      title: 'Exceeded expectations',
      content: 'I was worried about ordering something custom online but this exceeded all my expectations. The star map is accurate, beautifully designed, and arrived perfectly packaged. Will definitely order more for other special dates!',
      author: 'Emily R.',
      rating: 5
    },
    {
      id: 4,
      title: 'Amazing quality',
      content: 'The attention to detail is incredible. You can see every constellation clearly and the personalization options made it truly unique. It\'s now the centerpiece of our living room!',
      author: 'Michael K.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        className="w-4 h-4" 
        viewBox="0 0 15 14" 
        fill={i < rating ? 'currentColor' : 'none'}
        stroke={i >= rating ? 'currentColor' : 'none'}
      >
        <path d="M2.78 14L3.93 9.17L0.11 5.92L5.12 5.49L7.09 0.93L9.06 5.51L14.07 5.92L10.25 9.17L11.4 14L7.09 11.44L2.78 14Z"/>
      </svg>
    ));
  };

  return (
    <section className="px-5 md:px-12 mb-20 md:mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by thousands
            <br />
            for <span className="relative inline-block">
              <span>over 25 years</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 mt-6">Over 6,500 5 star reviews</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-tan rounded-xl p-5 flex flex-col"
            >
              <h4 className="font-bold mb-2">{review.title}</h4>
              <p className="text-sm flex-grow mb-4 line-clamp-6">
                {review.content}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm">{review.author}</span>
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

'use client';

import React, { useState } from 'react';
import ProductNav from '../components/customize/ProductNav';
import SimpleFooter from '../components/customize/SimpleFooter';

import ProductHero from '../components/customize/ProductHero';
import ProductToolbar from '../components/customize/ProductToolbar';
import ProductDetails from '../components/customize/ProductDetails';
import ProductGallery from '../components/customize/ProductGallery';
import ProductFeatures from '../components/customize/ProductFeatures';
import ProductVideo from '../components/customize/ProductVideo';
import CustomerReviews from '../components/customize/CustomerReviews';
import RelatedProducts from '../components/customize/RelatedProducts';
import ImageLightbox from '../components/customize/ImageLightbox';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedPoster, setSelectedPoster] = useState('Midnight Blue');
  const [selectedFrame, setSelectedFrame] = useState('No Frame');
  const [selectedLayout, setSelectedLayout] = useState('Portrait');
  const [quantity, setQuantity] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [displayOptions, setDisplayOptions] = useState({
    grid: false,
    lines: true,
    milkyway: true,
    ecliptic: false
  });
  const [showBorder, setShowBorder] = useState(true);
  const [personalMessage, setPersonalMessage] = useState('Your Message Here');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('23:45');
  const [timezoneOffset, setTimezoneOffset] = useState('+02:00');
  const [latitude, setLatitude] = useState('30.0444');
  const [longitude, setLongitude] = useState('31.2357');
  const galleryRef = React.useRef(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const product = {
    name: 'Custom Star Map Poster',
    color: 'Classic',
    price: '$29.99',
    description:
      "A personalized star map showing the exact alignment of the stars on your special date and location. Printed on premium museum-grade paper with archival inks for lasting quality.",
    materials: 'Museum-grade art matte paper, archival inks',
    dimensions: 'Available in Portrait, Landscape, and Square formats',
    weight: 'Varies by size',
    images: [
      '/images/flexilight-cherries-1.jpg',
      '/images/flexilight-cherries-2.jpg',
      '/images/flexilight-cherries-3.jpg',
      '/images/flexilight-cherries-4.jpg',
      '/images/flexilight-cherries-5.jpg',
      '/images/flexilight-cherries-6.jpg',
      '/images/flexilight-group.jpg',
      '/images/flexilight-group-use.jpg',
    ],
  };

  const colorOptions = [
    'Avocado',
    'Awesome',
    'Basketball',
    'Black',
    'Black & White',
    'Blue',
    'Blue Blocks',
    'Blue Digital',
    'Blue Words',
    'Cactus',
    'Cherries',
    'Duck',
    'Flamingo',
    'Leopard',
    'Llama',
    'Mummy',
    'Panda',
    'Peachy Blocks',
    'Penguin',
    'Pink Flowers',
    'Poo',
    'Red',
    'Shark',
    'Sloth',
    'Soccer',
    'Unicorn',
    'White Floral',
    'Wood',
  ];

  const posterOptions = [
    'Classic',
    'Modern',
    'Vintage',
    'Minimalist',
    'Abstract',
    'Geometric',
  ];

  return (
    <>
      <ProductNav />
      
      <ProductToolbar
        selectedColor={selectedColor}
        selectedPoster={selectedPoster}
        selectedFrame={selectedFrame}
        selectedLayout={selectedLayout}
        colorOptions={colorOptions}
        posterOptions={posterOptions}
        quantity={quantity}
        displayOptions={displayOptions}
        showBorder={showBorder}
        personalMessage={personalMessage}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        timezoneOffset={timezoneOffset}
        latitude={latitude}
        longitude={longitude}
        onColorChange={setSelectedColor}
        onPosterChange={setSelectedPoster}
        onFrameChange={setSelectedFrame}
        onLayoutChange={setSelectedLayout}
        onQuantityChange={setQuantity}
        onDisplayOptionsChange={setDisplayOptions}
        onShowBorderChange={setShowBorder}
        onPersonalMessageChange={setPersonalMessage}
        onDateChange={setSelectedDate}
        onTimeChange={setSelectedTime}
        onTimezoneOffsetChange={setTimezoneOffset}
        onLatitudeChange={setLatitude}
        onLongitudeChange={setLongitude}
        price={product.price}
        onFieldFocus={setIsFieldFocused}
      />

      <div className="min-h-screen bg-white" data-scroll-container>
        <main className="flex flex-col">
        <ProductHero
          product={product}
          selectedPoster={selectedPoster}
          selectedFrame={selectedFrame}
          selectedLayout={selectedLayout}
          selectedColor={selectedColor}
          displayOptions={displayOptions}
          showBorder={showBorder}
          personalMessage={personalMessage}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          timezoneOffset={timezoneOffset}
          latitude={latitude}
          longitude={longitude}
          onGalleryClick={scrollToGallery}
          isFieldFocused={isFieldFocused}
        />



        <ProductDetails
          description={product.description}
          materials={product.materials}
          dimensions={product.dimensions}
          weight={product.weight}
        />

        <div ref={galleryRef}>
          <ProductGallery 
            images={product.images} 
            productName={product.name}
            onImageClick={() => setShowLightbox(true)}
          />
        </div>

        <ProductFeatures />

        <ProductVideo onPlayClick={() => {}} />

        <CustomerReviews />

        {/* <RelatedProducts /> */}
        
        <SimpleFooter />
      </main>
      </div>

      {showLightbox && (
        <ImageLightbox
          images={product.images}
          productName={product.name}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default ProductPage;

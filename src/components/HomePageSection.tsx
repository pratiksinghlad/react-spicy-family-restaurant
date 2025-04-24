import { Phone } from 'lucide-react';
import React from 'react';
// import ImageCarousel from './ImageCarousel';

interface HomePageSectionProps { onImageClick: (src: string) => void; }

const carouselImages = [
  { src: 'https://placehold.co/1000x400/f97316/ffffff?text=Delicious+Dish+1&font=sans', alt: 'Delicious Dish 1' },
  { src: 'https://placehold.co/1000x400/f59e0b/ffffff?text=Cozy+Ambiance+2&font=sans', alt: 'Cozy Ambiance 2' },
  { src: 'https://placehold.co/1000x400/fbbf24/333333?text=Fresh+Ingredients+3&font=sans', alt: 'Fresh Ingredients 3' },
]; // Removed extra markdown link formatting

const HomePageSection: React.FC<HomePageSectionProps> = ({ onImageClick }) => {
  return (
    <section id="home" className="pt-16 focus:outline-none scroll-mt-16" tabIndex={-1}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white py-24 md:py-32 text-center mb-12 md:mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Spicy Family Restaurant</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up">Your favorite place for delicious meals in Rudrapur, Jagatpura.</p>
        </div>

       {/* --- Added Phone Numbers Section --- */}
       <div className="mt-8 flex flex-col items-center space-y-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center">
              {/* Changed icon color to white */}
              <Phone className="w-5 h-5 mr-3 text-white flex-shrink-0" aria-hidden="true" />
              <a href="tel:+917895518063" aria-label="Call +91 7895518063" className="text-white hover:text-amber-300">
                +91 7895518063
              </a>
            </div>
            <div className="flex items-center">
              {/* Changed icon color to white */}
              <Phone className="w-5 h-5 mr-3 text-white flex-shrink-0" aria-hidden="true" />
              <a href="tel:+919720948267" aria-label="Call +91 9720948267" className="text-white hover:text-amber-300">
                +91 9720948267
              </a>
            </div>
          </div>
          {/* --- End Phone Numbers Section --- */}
      </div>
      {/* Carousel Section */}
      {/* <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Gallery</h2>
          <ImageCarousel images={carouselImages} onImageClick={onImageClick} />
        </div>
      </div> */}
      {/* Featured Items Section */}
      {/* <div className="py-12 md:py-16 bg-white">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-semibold text-gray-800 mb-12">Chef's Specials</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                <img src="https://placehold.co/600x400/f97316/ffffff?text=Special+1" alt="Special Dish 1" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy"/>
                <h3 className="text-xl font-semibold mb-2">Gourmet Burger</h3>
                <p className="text-gray-600 text-sm">A juicy classic with our signature sauce.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                <img src="https://placehold.co/600x400/f59e0b/ffffff?text=Special+2" alt="Special Dish 2" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy"/>
                <h3 className="text-xl font-semibold mb-2">Pasta Fresca</h3>
                <p className="text-gray-600 text-sm">Fresh pasta with seasonal vegetables.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none lg:mx-0">
                <img src="https://placehold.co/600x400/fbbf24/ffffff?text=Special+3" alt="Special Dish 3" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy"/>
                <h3 className="text-xl font-semibold mb-2">Mango Delight</h3>
                <p className="text-gray-600 text-sm">A refreshing seasonal dessert.</p>
             </div>
           </div>
         </div>
      </div> */}
    </section>
  );
};
export default HomePageSection;

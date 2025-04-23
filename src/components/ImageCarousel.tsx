import React, { useState, useEffect, memo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface CarouselImage { src: string; alt: string; }
interface ImageCarouselProps { images: CarouselImage[]; onImageClick: (src: string) => void; }

const ImageCarousel: React.FC<ImageCarouselProps> = memo(({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex);
  const handleImageClick = () => { if (images[currentIndex]) onImageClick(images[currentIndex].src); };

  useEffect(() => {
    if (!images || images.length === 0) { setIsLoading(false); return; }
    setIsLoading(true);
    const img = new Image();
    img.src = images[currentIndex].src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => { console.error(`Failed to load image: ${images[currentIndex].src}`); setIsLoading(false); };
  }, [currentIndex, images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext, images.length]);

  if (!images || images.length === 0) return <div className="text-center py-8 text-gray-500">No images available.</div>;

  return (
    <div className="relative w-full max-w-4xl mx-auto group shadow-lg rounded-lg overflow-hidden" aria-roledescription="carousel">
      <div className="relative w-full h-64 md:h-96 bg-gray-300 cursor-pointer" onClick={handleImageClick} role="group" aria-roledescription="slide" aria-label={`Image ${currentIndex + 1} of ${images.length}: ${images[currentIndex].alt}`} aria-live="polite">
        {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-300 z-10"><LoadingSpinner /></div>}
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} loading={currentIndex === 0 ? "eager" : "lazy"} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`} onError={(e) => { e.currentTarget.src='https://placehold.co/1000x400/cccccc/ffffff?text=Error'; setIsLoading(false); }} onLoad={() => setIsLoading(false)} />
      </div>
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-20 disabled:cursor-not-allowed z-20" aria-label="Previous slide" disabled={isLoading}>
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-20 disabled:cursor-not-allowed z-20" aria-label="Next slide" disabled={isLoading}>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20" role="tablist" aria-label="Image slides">
            {images.map((_, slideIndex) => (
              <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-2.5 h-2.5 rounded-full transition duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-black/50 focus:ring-white ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-200'}`} role="tab" aria-selected={currentIndex === slideIndex} aria-label={`Go to slide ${slideIndex + 1}`} disabled={isLoading}></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
});
export default ImageCarousel;
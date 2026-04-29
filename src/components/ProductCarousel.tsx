import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Preload all images on mount
  useEffect(() => {
    const loaded = new Array(images.length).fill(false);
    images.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded[idx] = true;
        setImagesLoaded([...loaded]);
      };
      if (img.complete) {
        loaded[idx] = true;
      }
    });
    setImagesLoaded(loaded);
  }, [images]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 200);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, images.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, images.length, goToSlide]);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full">
      {/* Main carousel */}
      <div 
        className="relative rounded-lg bg-secondary overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Discount badge */}
        <div className="absolute top-3 left-3 z-10 bg-success text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          67% OFF
        </div>
        
        <div 
          className="flex transition-transform duration-200 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="min-w-full flex items-center justify-center aspect-square"
            >
              <img 
                src={image} 
                alt={`Produto ${index + 1}`}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Red dots indicator only */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-200 rounded-full ${
              currentIndex === index 
                ? "bg-primary w-2.5 h-2.5" 
                : "bg-muted-foreground/30 w-2 h-2"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

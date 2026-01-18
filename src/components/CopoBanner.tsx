import { useEffect, useState } from "react";
import copoImage from "@/assets/copo-corinthians-banner.jpeg";

// Preload image immediately
const preloadedImg = new Image();
preloadedImg.src = copoImage;

const CopoBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(preloadedImg.complete);

  useEffect(() => {
    if (preloadedImg.complete) {
      setImageLoaded(true);
    } else {
      preloadedImg.onload = () => setImageLoaded(true);
    }
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden my-6 shadow-lg">
      <div className="relative aspect-[16/8] sm:aspect-[16/6] bg-corinthians-black">
        <img 
          src={copoImage} 
          alt="Kit Copo Corinthians - Leve junto com sua camisa"
          className={`w-full h-full object-cover object-center transition-opacity duration-200 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
    </div>
  );
};

export default CopoBanner;

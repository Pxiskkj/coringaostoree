import { useEffect, useState } from "react";
import camisaBrancaThumb from "@/assets/camisa-branca-thumb.jpeg";
import camisaPretaThumb from "@/assets/camisa-preta-thumb.jpeg";

// Preload thumbnails immediately
const preloadBranca = new Image();
preloadBranca.src = camisaBrancaThumb;
const preloadPreta = new Image();
preloadPreta.src = camisaPretaThumb;

interface ColorOption {
  id: string;
  name: string;
  colorClass: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onSelectColor: (colorId: string) => void;
}

const colorThumbnails: Record<string, string> = {
  branca: camisaBrancaThumb,
  preta: camisaPretaThumb,
};

const ColorSelector = ({ colors, selectedColor, onSelectColor }: ColorSelectorProps) => {
  const [imagesLoaded, setImagesLoaded] = useState({
    branca: preloadBranca.complete,
    preta: preloadPreta.complete,
  });

  useEffect(() => {
    if (!preloadBranca.complete) {
      preloadBranca.onload = () => setImagesLoaded(prev => ({ ...prev, branca: true }));
    }
    if (!preloadPreta.complete) {
      preloadPreta.onload = () => setImagesLoaded(prev => ({ ...prev, preta: true }));
    }
  }, []);

  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => onSelectColor(color.id)}
          className={`w-12 h-16 rounded-lg border-2 transition-all duration-200 overflow-hidden bg-secondary ${
            selectedColor === color.id
              ? "border-primary ring-2 ring-primary ring-offset-1"
              : "border-border hover:border-primary/50"
          }`}
          aria-label={`Selecionar cor ${color.name}`}
          title={color.name}
        >
          <img 
            src={colorThumbnails[color.id]} 
            alt={color.name}
            className={`w-full h-full object-contain transition-opacity duration-150 ${imagesLoaded[color.id as keyof typeof imagesLoaded] ? 'opacity-100' : 'opacity-0'}`}
            loading="eager"
            decoding="async"
            onLoad={() => setImagesLoaded(prev => ({ ...prev, [color.id]: true }))}
          />
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;

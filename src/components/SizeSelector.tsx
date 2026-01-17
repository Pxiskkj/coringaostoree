import { useState } from "react";
import SizeGuideModal from "./SizeGuideModal";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div>
      {/* Header with selected size and guide link */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-foreground">
          TAMANHO: <span className="text-info font-bold">{selectedSize || "-"}</span>
        </p>
        <button 
          onClick={() => setIsGuideOpen(true)}
          className="text-info text-sm font-medium underline hover:text-info/80 transition-colors"
        >
          Guia de Tamanhos
        </button>
      </div>

      {/* Size buttons - circular style */}
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`w-12 h-12 rounded-full font-medium text-sm transition-all border-2 flex items-center justify-center ${
              selectedSize === size
                ? "bg-info text-white border-info"
                : "bg-background text-info border-info hover:bg-info/10"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
};

export default SizeSelector;

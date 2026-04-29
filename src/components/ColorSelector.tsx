import camisaAmarelaThumb from "@/assets/camisa-amarela-thumb.jpeg";
import camisaAzulThumb from "@/assets/camisa-azul-thumb.jpeg";

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
  branca: camisaAmarelaThumb,
  preta: camisaAzulThumb,
};

const ColorSelector = ({ colors, selectedColor, onSelectColor }: ColorSelectorProps) => {
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
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;

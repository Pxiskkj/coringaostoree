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

const ColorSelector = ({ colors, selectedColor, onSelectColor }: ColorSelectorProps) => {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => onSelectColor(color.id)}
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            selectedColor === color.id
              ? "border-primary ring-2 ring-primary ring-offset-2"
              : "border-border hover:border-primary/50"
          } ${color.colorClass}`}
          aria-label={`Selecionar cor ${color.name}`}
          title={color.name}
        />
      ))}
    </div>
  );
};

export default ColorSelector;

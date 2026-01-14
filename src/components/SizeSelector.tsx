interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
          className={`min-w-[48px] h-10 px-4 rounded-lg font-medium text-sm transition-all border-2 ${
            selectedSize === size
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-foreground border-border hover:border-primary"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;

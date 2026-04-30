import { useState } from "react";
import { X, Plus, Minus, Check } from "lucide-react";
import kitCoposImg from "@/assets/kit-copos-cart.png";

// Preload kit copos image immediately at module load
if (typeof window !== "undefined") {
  const img = new Image();
  img.src = kitCoposImg;
  img.decoding = "async";
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  selectedColor?: "branca" | "preta";
}

const CHECKOUT_URLS = {
  branca: "https://pay.copabrasilmania.site/checkout?product=adf70c5b-1e4d-11f1-b2a5-46da4690ad53",
  branca_combo: "https://pay.copabrasilmania.site/checkout?product=d056a941-44c3-11f1-b2a5-46da4690ad53",
  preta: "https://pay.copabrasilmania.site/checkout?product=97f43c28-44c3-11f1-b2a5-46da4690ad53",
  preta_combo: "https://pay.copabrasilmania.site/checkout?product=fe386ddb-44c3-11f1-b2a5-46da4690ad53",
};
const KIT_COPO_PRICE = 27.98;

const CartModal = ({ isOpen, onClose, items, onRemoveItem, selectedColor = "branca" }: CartModalProps) => {
  const [kitCopoQuantity, setKitCopoQuantity] = useState(0);

  if (!isOpen) return null;

  const subtotalCamisas = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotalKitCopo = kitCopoQuantity * KIT_COPO_PRICE;
  const total = subtotalCamisas + subtotalKitCopo;

  const handleAddKitCopo = () => {
    setKitCopoQuantity(prev => prev + 1);
  };

  const handleRemoveKitCopo = () => {
    setKitCopoQuantity(prev => Math.max(0, prev - 1));
  };

  const handleCheckout = () => {
    const key = kitCopoQuantity > 0 ? `${selectedColor}_combo` : selectedColor;
    const checkoutUrl = CHECKOUT_URLS[key as keyof typeof CHECKOUT_URLS];
    window.open(checkoutUrl, "_blank");
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0) + kitCopoQuantity;

  return (
    <div className="cart-modal animate-fade-in" onClick={onClose}>
      <div 
        className="cart-content animate-slide-in-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-foreground">CARRINHO</h2>
            <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
              {totalItemsCount}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Extra product suggestion */}
        <div className="mb-4">
          <p className="text-foreground font-medium mb-3">Você também pode levar:</p>
          <div className="flex items-center gap-3 p-3 bg-info-light rounded-xl">
            <div className="w-16 h-16 bg-card rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
              <img 
                src={kitCoposImg} 
                alt="Kit Copo Cerveja e Dose Brasil"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-xs leading-tight">Kit Copo Munich e Copo Dose Brasil</h4>
              <p className="text-primary font-bold text-sm">R$ {KIT_COPO_PRICE.toFixed(2).replace('.', ',')}</p>
              {kitCopoQuantity > 0 && (
                <p className="text-xs text-muted-foreground">Qtd: {kitCopoQuantity}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 flex-shrink-0">
              {kitCopoQuantity === 0 ? (
                <button 
                  onClick={handleAddKitCopo}
                  className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Adicionar
                </button>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleRemoveKitCopo}
                      className="w-7 h-7 flex items-center justify-center bg-muted rounded-full hover:bg-muted/80 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{kitCopoQuantity}</span>
                    <button 
                      onClick={handleAddKitCopo}
                      className="w-7 h-7 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button 
                    onClick={() => setKitCopoQuantity(0)}
                    className="text-primary text-xs font-medium hover:underline text-center"
                  >
                    Remover
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Cart items */}
        <div className="space-y-4 max-h-48 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
              <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm leading-tight mb-1 truncate">
                  {item.name}
                </h3>
                <p className="font-bold text-foreground mb-1">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Qtd: {item.quantity}
                  </span>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-2 py-4 border-t border-border">
          <div className="flex justify-between text-muted-foreground">
            <span>Camisa ({items.reduce((acc, item) => acc + item.quantity, 0)}x)</span>
            <span>R$ {subtotalCamisas.toFixed(2).replace('.', ',')}</span>
          </div>
          {kitCopoQuantity > 0 && (
            <div className="flex justify-between text-muted-foreground">
              <span>Kit Copo ({kitCopoQuantity}x)</span>
              <span>R$ {subtotalKitCopo.toFixed(2).replace('.', ',')}</span>
            </div>
          )}
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-2">
            <span>TOTAL</span>
            <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        {/* Free shipping banner */}
        <div className="frete-banner flex items-center gap-2 mb-4">
          <Check className="w-5 h-5" />
          <div>
            <p className="font-bold">Frete Grátis no PIX</p>
            <p className="text-sm">Pague via PIX e ganhe frete grátis para todo Brasil</p>
          </div>
        </div>

        {/* Checkout button */}
        <button onClick={handleCheckout} className="btn-buy w-full">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartModal;

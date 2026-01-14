import { X, Plus, Check } from "lucide-react";
import copoCorinthians from "@/assets/copo-corinthians-banner.jpeg";

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
  onAddExtra?: () => void;
}

const CartModal = ({ isOpen, onClose, items, onRemoveItem, onAddExtra }: CartModalProps) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

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
            <span className="w-6 h-6 rounded-full bg-info flex items-center justify-center text-sm font-bold text-primary-foreground">
              {items.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
              <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground text-sm leading-tight mb-1">
                  {item.name}
                </h3>
                <p className="font-bold text-foreground mb-1">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Quantidade: {item.quantity}
                  </span>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-info text-sm font-medium hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra product suggestion */}
        <div className="mt-4 mb-4">
          <p className="text-foreground font-medium mb-3">Você também pode levar:</p>
          <div className="flex items-center gap-4 p-3 bg-info-light rounded-xl">
            <div className="w-16 h-16 bg-card rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={copoCorinthians} 
                alt="Kit Copo Corinthians"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground text-sm">Kit Copo Corinthians</h4>
              <p className="text-info font-bold">R$ 27,98</p>
            </div>
            <button 
              onClick={onAddExtra}
              className="flex items-center gap-1 px-4 py-2 border-2 border-info text-info rounded-full font-medium hover:bg-info hover:text-primary-foreground transition-colors"
            >
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-2 py-4 border-t border-border">
          <div className="flex justify-between text-muted-foreground">
            <span>Camisa ({items.reduce((acc, item) => acc + item.quantity, 0)}x)</span>
            <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-2">
            <span>TOTAL</span>
            <span className="text-info">R$ {total.toFixed(2).replace('.', ',')}</span>
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
        <button className="btn-buy w-full">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartModal;

import { useState } from "react";
import ProductCarousel from "@/components/ProductCarousel";
import SizeSelector from "@/components/SizeSelector";
import ProductDescription from "@/components/ProductDescription";
import ReviewsSection from "@/components/ReviewsSection";
import CartModal from "@/components/CartModal";
import CopoBanner from "@/components/CopoBanner";
import { ShoppingCart, Truck, Shield, Star } from "lucide-react";

// Import images
import camisa1 from "@/assets/camisa-corinthians-1.png";
import camisa2 from "@/assets/camisa-corinthians-2.png";
import camisa3 from "@/assets/camisa-corinthians-3.png";

const productImages = [camisa1, camisa2, camisa3];
const sizes = ["P", "M", "G", "GG", "XGG"];

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size?: string;
  }>>([]);

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho");
      return;
    }

    const newItem = {
      id: `camisa-${selectedSize}-${Date.now()}`,
      name: `Camisa Corinthians I Branca Masc. Nike 25/26 S/Nº - Tam. ${selectedSize}`,
      price: 127.42,
      quantity: 1,
      image: camisa1,
      size: selectedSize,
    };

    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground py-3 px-4">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">CORINGÃO STORE</h1>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative"
            aria-label="Carrinho"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-info rounded-full flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container py-4">
        {/* Product Image Carousel */}
        <ProductCarousel images={productImages} />

        {/* Product Info */}
        <div className="mt-6">
          {/* Rating badge */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-rating-star text-rating-star" />
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground text-sm">(3.287 avaliações)</span>
          </div>

          {/* Product title */}
          <h2 className="text-xl font-bold text-foreground mb-3">
            Camisa Corinthians I Branca Masc. Nike 25/26 S/Nº
          </h2>

          {/* Price */}
          <div className="mb-4">
            <span className="price-original">R$ 299,99</span>
            <div className="flex items-baseline gap-2">
              <span className="price-current">R$ 127,42</span>
              <span className="text-success text-sm font-medium">57% OFF</span>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              Em até 12x de R$ 10,62 sem juros
            </p>
          </div>

          {/* Size selector */}
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Tamanho:</p>
            <SizeSelector 
              sizes={sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-success">
              <Truck className="w-4 h-4" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Compra 100% Segura</span>
            </div>
          </div>

          {/* Buy button */}
          <button 
            onClick={handleBuyNow}
            className="btn-buy w-full mb-4"
          >
            COMPRAR AGORA
          </button>

          {/* Copo Banner */}
          <CopoBanner />

          {/* Product Description */}
          <ProductDescription />

          {/* Reviews Section */}
          <ReviewsSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 px-4 mt-8">
        <div className="container text-center">
          <h3 className="text-lg font-bold mb-2">CORINGÃO STORE</h3>
          <p className="text-sm opacity-80">
            Seu manto sagrado está aqui. Vai Corinthians!
          </p>
          <p className="text-xs opacity-60 mt-4">
            © 2026 Coringão Store. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;

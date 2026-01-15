import { useState } from "react";
import ProductCarousel from "@/components/ProductCarousel";
import SizeSelector from "@/components/SizeSelector";
import ColorSelector from "@/components/ColorSelector";
import ProductDescription from "@/components/ProductDescription";
import ReviewsSection from "@/components/ReviewsSection";
import CartModal from "@/components/CartModal";
import CopoBanner from "@/components/CopoBanner";
import { ShoppingCart, Truck, Shield, Star, Menu } from "lucide-react";

// Import camisa branca
import camisa1 from "@/assets/camisa-corinthians-1.jpg";
import camisa2 from "@/assets/camisa-corinthians-2.jpg";
import camisa3 from "@/assets/camisa-corinthians-3.jpg";
import camisa4 from "@/assets/camisa-corinthians-4.jpg";
import camisa5 from "@/assets/camisa-corinthians-5.jpg";

// Import camisa preta
import camisaPreta1 from "@/assets/camisa-preta-1.jpg";
import camisaPreta2 from "@/assets/camisa-preta-2.jpg";
import camisaPreta3 from "@/assets/camisa-preta-3.jpg";
import camisaPreta4 from "@/assets/camisa-preta-4.jpg";
import camisaPreta5 from "@/assets/camisa-preta-5.jpg";
import camisaPreta6 from "@/assets/camisa-preta-6.jpg";
import camisaPreta7 from "@/assets/camisa-preta-7.jpg";

const productImagesBranca = [camisa1, camisa2, camisa3, camisa4, camisa5];
const productImagesPreta = [camisaPreta1, camisaPreta2, camisaPreta3, camisaPreta4, camisaPreta5, camisaPreta6, camisaPreta7];

const sizes = ["P", "M", "G", "GG", "XGG"];

const colorOptions = [
  { id: "branca", name: "Branca", colorClass: "bg-white" },
  { id: "preta", name: "Preta", colorClass: "bg-corinthians-black" },
];

const productInfo = {
  branca: {
    name: "Camisa Nike Corinthians I 2025/26 Torcedor Pro Masculina",
    images: productImagesBranca,
  },
  preta: {
    name: "Camisa Corinthians Nike Total 90 III 2025/26 Torcedor Pro Masculina",
    images: productImagesPreta,
  },
};

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<"branca" | "preta">("branca");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size?: string;
  }>>([]);

  const currentProduct = productInfo[selectedColor];

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho");
      return;
    }

    const newItem = {
      id: `camisa-${selectedColor}-${selectedSize}-${Date.now()}`,
      name: `${currentProduct.name} - Tam. ${selectedSize}`,
      price: 127.42,
      quantity: 1,
      image: currentProduct.images[0],
      size: selectedSize,
    };

    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId as "branca" | "preta");
    setSelectedSize(null); // Reset size when changing color
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - New Design */}
      <header className="sticky top-0 z-40 bg-background border-b border-border py-3 px-4">
        <div className="container flex items-center justify-between">
          {/* Menu hamburger */}
          <button className="p-1" aria-label="Menu">
            <Menu className="w-7 h-7 text-foreground" strokeWidth={2} />
          </button>
          
          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-xl font-extrabold text-primary tracking-tight">Coringão</h1>
            <span className="text-sm font-bold text-foreground -mt-1 block">Store</span>
          </div>
          
          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-1"
            aria-label="Carrinho"
          >
            <ShoppingCart className="w-7 h-7 text-foreground" strokeWidth={1.5} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container py-4">
        {/* Product Image Carousel */}
        <ProductCarousel images={currentProduct.images} key={selectedColor} />

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
            {currentProduct.name}
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

          {/* Color selector */}
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">
              Cor: <span className="font-normal capitalize">{selectedColor}</span>
            </p>
            <ColorSelector 
              colors={colorOptions}
              selectedColor={selectedColor}
              onSelectColor={handleColorChange}
            />
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

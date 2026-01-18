import { useState, useEffect } from "react";
import ProductCarousel from "@/components/ProductCarousel";
import SizeSelector from "@/components/SizeSelector";
import ColorSelector from "@/components/ColorSelector";
import ProductDescription from "@/components/ProductDescription";
import ReviewsSection from "@/components/ReviewsSection";
import CartModal from "@/components/CartModal";
import CopoBanner from "@/components/CopoBanner";
import ShippingCalculator from "@/components/ShippingCalculator";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PersonalizationSelector from "@/components/PersonalizationSelector";
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

// Import kit copos and banner for preload
import kitCoposImg from "@/assets/kit-copos-corinthians.jpeg";
import coposBanner from "@/assets/copo-corinthians-banner.jpeg";
import camisaBrancaThumb from "@/assets/camisa-branca-thumb.jpeg";
import camisaPretaThumb from "@/assets/camisa-preta-thumb.jpeg";

const productImagesBranca = [camisa1, camisa2, camisa3, camisa4, camisa5];
const productImagesPreta = [camisaPreta1, camisaPreta2, camisaPreta3, camisaPreta4, camisaPreta5, camisaPreta6, camisaPreta7];

// Preload all images immediately with high priority
const preloadImages = [
  ...productImagesBranca, 
  ...productImagesPreta, 
  kitCoposImg, 
  coposBanner,
  camisaBrancaThumb,
  camisaPretaThumb
];

// Create preload links in head for critical images
if (typeof document !== 'undefined') {
  preloadImages.forEach((src, index) => {
    // Use Image object for immediate preloading
    const img = new Image();
    img.src = src;
    img.decoding = 'async';
    
    // Also add preload link for first few critical images
    if (index < 4) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  });
}

const sizes = ["P", "M", "G", "GG", "2GG", "3GG", "4GG"];

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
      {/* Header - Professional Design */}
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

        {/* Sales Badge - Compact */}
        <div className="inline-flex items-center gap-1.5 mt-3 py-2 px-3 bg-muted/50 rounded-full">
          <div className="flex items-center gap-px">
            <Star className="w-3.5 h-3.5 fill-rating-star text-rating-star" />
            <Star className="w-3.5 h-3.5 fill-rating-star text-rating-star" />
            <Star className="w-3.5 h-3.5 fill-rating-star text-rating-star" />
            <Star className="w-3.5 h-3.5 fill-rating-star text-rating-star" />
            <Star className="w-3.5 h-3.5 fill-rating-star/40 text-rating-star" />
          </div>
          <span className="font-semibold text-foreground text-sm">4.8</span>
          <div className="w-px h-4 bg-border/70"></div>
          <span className="text-info font-semibold text-sm">12.847</span>
          <span className="text-muted-foreground text-sm">vendidos</span>
        </div>

        {/* Product Info */}
        <div className="mt-6">
          {/* Product title */}
          <h2 className="text-xl font-bold text-foreground mb-3">
            {currentProduct.name}
          </h2>

          {/* Price */}
          <div className="mb-4">
            <span className="price-original">R$ 399,00</span>
            <div className="flex items-baseline gap-2">
              <span className="price-current">R$ 127,42</span>
              <span className="text-success text-sm font-medium">67% OFF</span>
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
            <SizeSelector 
              sizes={sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </div>

          {/* Personalization Selector */}
          <PersonalizationSelector />

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

          {/* Shipping Calculator */}
          <ShippingCalculator />

          {/* Product Description */}
          <ProductDescription />

          {/* Reviews Section */}
          <ReviewsSection />
        </div>
      </main>

      {/* Newsletter - Full width outside container */}
      <Newsletter />

      {/* Footer Links Section */}
      <Footer />

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

import { useState } from "react";
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
import MobileMenu from "@/components/MobileMenu";
import { ShoppingCart, Truck, Shield, Star, Menu } from "lucide-react";

// Import camisa amarela Brasil
import camisa1 from "@/assets/camisa-brasil-1.webp";
import camisa2 from "@/assets/camisa-brasil-2.webp";
import camisa3 from "@/assets/camisa-brasil-3.webp";
import camisa4 from "@/assets/camisa-brasil-4.webp";
import camisa5 from "@/assets/camisa-brasil-5.webp";

// Import camisa azul Brasil Jordan
import camisaPreta1 from "@/assets/camisa-brasil-azul-1.webp";
import camisaPreta2 from "@/assets/camisa-brasil-azul-2.webp";
import camisaPreta3 from "@/assets/camisa-brasil-azul-3.webp";
import camisaPreta4 from "@/assets/camisa-brasil-azul-4.webp";
import camisaPreta5 from "@/assets/camisa-brasil-azul-5.webp";

// Import kit copos and banner
import kitCoposImg from "@/assets/kit-copos-cart.png";
import coposBanner from "@/assets/copo-brinde-banner.png";

const productImagesBranca = [camisa1, camisa2, camisa3, camisa4, camisa5];
const productImagesPreta = [camisaPreta1, camisaPreta2, camisaPreta3, camisaPreta4, camisaPreta5];

const sizes = ["P", "M", "G", "GG", "2GG", "3GG", "4GG"];

const colorOptions = [
  { id: "branca", name: "Amarela", colorClass: "bg-yellow-400" },
  { id: "preta", name: "Azul", colorClass: "bg-blue-700" },
];

const productInfo = {
  branca: {
    name: "Camisa Nike Brasil Torcedor Oficial | Copa 2026",
    images: productImagesBranca,
  },
  preta: {
    name: "Camisa Brasil Nike Jordan I 2026/2027 Torcedor Pro Azul Masculina",
    images: productImagesPreta,
  },
};

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<"branca" | "preta">("branca");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div className="container flex items-center justify-between relative">
          {/* Menu hamburger */}
          <button onClick={() => setIsMenuOpen(true)} className="p-1" aria-label="Menu">
            <Menu className="w-7 h-7 text-foreground" strokeWidth={2} />
          </button>
          
          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-xl font-extrabold text-primary tracking-tight">COPA</h1>
            <span className="text-sm font-bold text-foreground -mt-1 block">BRASIL</span>
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Index;

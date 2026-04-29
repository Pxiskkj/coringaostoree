import { Instagram, Twitter, Youtube, Facebook, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import paymentMethods from "@/assets/payment-methods.jpeg";

interface AccordionItemProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, items, isOpen, onToggle }: AccordionItemProps) => (
  <div className="border-t border-border">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 px-4 text-left"
    >
      <span className="text-primary font-semibold text-lg">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-muted-foreground" />
      ) : (
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
    {isOpen && (
      <div className="px-4 pb-4 space-y-3">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </div>
);

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "institucional",
      title: "Institucional",
      items: ["Sobre o Brasil", "História da Seleção", "Trabalhe Conosco"],
    },
    {
      id: "ajuda",
      title: "Central de Ajuda",
      items: ["Perguntas Frequentes", "Como Comprar", "Trocas e Devoluções", "Prazo de Entrega"],
    },
    {
      id: "atendimento",
      title: "Atendimento",
      items: ["Fale Conosco", "Política de Privacidade", "Termos de Uso"],
    },
  ];

  return (
    <div className="bg-background border-t border-border mt-8">
      {/* Social Media Section */}
      <div className="py-4 text-center">
        <p className="text-primary font-semibold text-sm mb-3">Acompanhe o Brasil</p>
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.instagram.com/brasil?igsh=MW1yc2g1aHExdXcwcw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition-opacity" 
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7" strokeWidth={1.5} />
          </a>
          <a 
            href="https://x.com/cbf_futebol?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition-opacity" 
            aria-label="Twitter"
          >
            <Twitter className="w-7 h-7" strokeWidth={1.5} />
          </a>
          <a 
            href="https://youtube.com/@brasil?si=96FKiZXO4xNZFCUL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition-opacity" 
            aria-label="YouTube"
          >
            <Youtube className="w-7 h-7" strokeWidth={1.5} />
          </a>
          <a 
            href="https://www.facebook.com/share/17WfULSSSL/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition-opacity" 
            aria-label="Facebook"
          >
            <Facebook className="w-7 h-7" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Accordion Sections */}
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          title={section.title}
          items={section.items}
          isOpen={openSection === section.id}
          onToggle={() => toggleSection(section.id)}
        />
      ))}

      {/* Payment Methods - Using the actual image */}
      <div className="border-t border-border px-4 py-5">
        <h4 className="text-primary font-semibold text-base mb-3">FORMAS DE PAGAMENTOS</h4>
        <img 
          src={paymentMethods} 
          alt="Formas de pagamento: Visa, Mastercard, Banri Compras, Diners, PIX, American Express"
          className="w-full max-w-sm mx-auto"
        />
      </div>

      {/* Blue Line Separator */}
      <div className="h-1 bg-info"></div>

      {/* Coringão Store Section */}
      <div className="bg-background px-4 py-6 text-center">
        <h3 className="text-lg font-bold text-muted-foreground mb-1">
          ⭐ ⭐ ⭐
        </h3>
        <h3 className="text-lg font-bold text-muted-foreground mb-3">
          Copa Brasil
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed max-w-md mx-auto">
          Os preços, promoções, condições de pagamento, frete e produtos anunciados na loja virtual são válidos exclusivamente para compras online e estão sujeitos à alteração sem aviso prévio. Estas ofertas são válidas até o término de nossos estoques para internet. As vendas ainda estão sujeitas à análise e confirmação de dados. Caso exista alguma diferença nos preços ofertados, será considerado válido o preço do Carrinho de Compras. As imagens dos produtos são meramente ilustrativas. CONFEDERAÇÃO BRASILEIRA DE FUTEBOL - CBF. CNPJ: 33.655.444/0001-26 Copyright © 2026 - Todos os direitos reservados. Av. Luis Carlos Prestes, 130 - Barra da Tijuca, Rio de Janeiro - RJ, CEP 22775-055.
        </p>
      </div>
    </div>
  );
};

export default Footer;

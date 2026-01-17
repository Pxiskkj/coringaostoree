import { Instagram, Twitter, Youtube, Facebook, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
      items: ["Sobre o Corinthians", "História do Clube", "Trabalhe Conosco"],
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
      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 py-6">
        <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Instagram">
          <Instagram className="w-8 h-8" strokeWidth={1.5} />
        </a>
        <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Twitter">
          <Twitter className="w-8 h-8" strokeWidth={1.5} />
        </a>
        <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="YouTube">
          <Youtube className="w-8 h-8" strokeWidth={1.5} />
        </a>
        <a href="#" className="text-primary hover:opacity-80 transition-opacity" aria-label="Facebook">
          <Facebook className="w-8 h-8" strokeWidth={1.5} />
        </a>
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

      {/* Payment Methods - Updated Layout */}
      <div className="border-t border-border px-4 py-6">
        <h4 className="text-primary font-semibold text-lg mb-4">FORMAS DE PAGAMENTOS</h4>
        <div className="flex flex-wrap items-center gap-2">
          {/* Visa */}
          <div className="bg-[#F7F7F7] rounded-lg px-3 py-2 shadow-sm">
            <span className="text-[#1A1F71] font-bold text-lg italic tracking-tight">VISA</span>
          </div>
          {/* Mastercard */}
          <div className="bg-[#F7F7F7] rounded-lg px-3 py-2 shadow-sm flex items-center">
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-[#EB001B]"></div>
              <div className="w-6 h-6 rounded-full bg-[#F79E1B] -ml-2"></div>
            </div>
          </div>
          {/* Banri Compras */}
          <div className="bg-[#F7F7F7] rounded-lg px-2 py-1 shadow-sm">
            <div className="text-[#E4002B] font-bold text-[10px] leading-tight text-center">
              <span className="text-[#1D428A]">BANRI</span><br/>
              <span className="text-[#E4002B]">COMPRAS</span>
            </div>
          </div>
          {/* Diners */}
          <div className="bg-[#F7F7F7] rounded-lg px-3 py-2 shadow-sm">
            <div className="w-8 h-8 rounded-full border-2 border-[#0066A1] flex items-center justify-center">
              <div className="w-1.5 h-5 bg-[#0066A1] rounded-full"></div>
            </div>
          </div>
          {/* PIX */}
          <div className="bg-[#F7F7F7] rounded-lg px-3 py-2 shadow-sm flex items-center gap-1">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[#32BCAD] transform rotate-45"></div>
            </div>
            <span className="text-[#32BCAD] font-bold text-sm ml-1">pix</span>
          </div>
          {/* American Express */}
          <div className="bg-[#006FCF] rounded-lg px-2 py-1 shadow-sm">
            <span className="text-white font-bold text-[8px] leading-tight block text-center">AMERICAN<br/>EXPRESS</span>
          </div>
        </div>
      </div>

      {/* Blue Line Separator */}
      <div className="h-1 bg-info"></div>

      {/* Coringão Store Section */}
      <div className="bg-background px-4 py-8 text-center">
        <h3 className="text-2xl font-bold text-muted-foreground mb-1">
          ⭐ ⭐ ⭐
        </h3>
        <h3 className="text-2xl font-bold text-muted-foreground mb-4">
          Coringão Store
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
          Os preços, promoções, condições de pagamento, frete e produtos anunciados na loja virtual são válidos exclusivamente para compras online e estão sujeitos à alteração sem aviso prévio. Estas ofertas são válidas até o término de nossos estoques para internet. As vendas ainda estão sujeitas à análise e confirmação de dados. Caso exista alguma diferença nos preços ofertados, será considerado válido o preço do Carrinho de Compras. As imagens dos produtos são meramente ilustrativas. SPORT CLUB CORINTHIANS PAULISTA. CNPJ: 61.902.722/0001-26 Copyright © 2026 - Todos os direitos reservados Praça Roberto Gomes Pedrosa, 1 - Morumbi, São Paulo - SP
        </p>
      </div>
    </div>
  );
};

export default Footer;

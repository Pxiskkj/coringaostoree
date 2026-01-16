import { Instagram, Twitter, Youtube, Facebook, ChevronDown, ChevronUp, CreditCard } from "lucide-react";
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

      {/* Payment Methods */}
      <div className="border-t border-border px-4 py-6">
        <h4 className="text-primary font-semibold text-lg mb-4">FORMAS DE PAGAMENTOS</h4>
        <div className="flex flex-wrap gap-3">
          {/* Visa */}
          <div className="bg-white rounded-md p-2 shadow-sm border border-border">
            <div className="w-12 h-8 flex items-center justify-center">
              <span className="text-[#1A1F71] font-bold text-sm italic">VISA</span>
            </div>
          </div>
          {/* Mastercard */}
          <div className="bg-white rounded-md p-2 shadow-sm border border-border">
            <div className="w-12 h-8 flex items-center justify-center">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[#EB001B]"></div>
                <div className="w-5 h-5 rounded-full bg-[#F79E1B] -ml-2"></div>
              </div>
            </div>
          </div>
          {/* Elo */}
          <div className="bg-white rounded-md p-2 shadow-sm border border-border">
            <div className="w-12 h-8 flex items-center justify-center">
              <span className="text-[#000] font-bold text-xs">ELO</span>
            </div>
          </div>
          {/* Diners */}
          <div className="bg-white rounded-md p-2 shadow-sm border border-border">
            <div className="w-12 h-8 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-[#0066A1] flex items-center justify-center">
                <div className="w-1 h-4 bg-[#0066A1] rounded-full"></div>
              </div>
            </div>
          </div>
          {/* PIX */}
          <div className="bg-white rounded-md p-2 shadow-sm border border-border">
            <div className="w-12 h-8 flex items-center justify-center">
              <span className="text-[#32BCAD] font-bold text-xs">PIX</span>
            </div>
          </div>
          {/* American Express */}
          <div className="bg-[#006FCF] rounded-md p-2 shadow-sm">
            <div className="w-12 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-[8px] leading-tight text-center">AMERICAN<br/>EXPRESS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Line */}
      <div className="h-1 bg-primary"></div>
    </div>
  );
};

export default Footer;

import { Check } from "lucide-react";

const ProductDescription = () => {
  const features = [
    "Tecido de alta qualidade com tecnologia Dri-FIT",
    "Escudo do Corinthians bordado com acabamento premium",
    "Listras tradicionais preto e branco",
    "Gola confortável com ajuste perfeito",
    "Material leve e respirável ideal para jogos e dia a dia",
    "Disponível para personalização com nome e número",
  ];

  return (
    <section className="py-4">
      <h2 className="section-title mb-3">DESCRIÇÃO DO PRODUTO</h2>
      
      <div className="space-y-4">
        <p className="text-foreground leading-relaxed">
          Vista a paixão pelo Timão com a <strong>Camisa Corinthians I 25/26</strong>, 
          o manto sagrado do clube mais amado do Brasil. Produzida com materiais de 
          primeira linha, esta camisa combina tradição e conforto para você torcer com estilo.
        </p>
        
        <p className="text-foreground leading-relaxed">
          O design clássico preto e branco representa toda a história e glória do 
          Sport Club Corinthians Paulista, desde 1910 fazendo história no futebol brasileiro.
          Ideal para usar nos jogos, no dia a dia ou colecionar.
        </p>

        <div className="space-y-2 pt-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

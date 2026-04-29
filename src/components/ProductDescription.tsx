import { Check, Package, Shirt, Shield, Award } from "lucide-react";

const ProductDescription = () => {
  const features = [
    "Tecido 100% poliéster com tecnologia Nike Dri-FIT de alta performance",
    "Escudo da CBF (Confederação Brasileira de Futebol) bordado com precisão",
    "Patrocínios oficiais estampados conforme versão de jogo",
    "Gola com acabamento premium e etiqueta interna tecida",
    "Corte masculino regular com ajuste confortável",
    "Material leve, respirável e de secagem rápida",
    "Produto 100% original com certificado de autenticidade Nike",
    "Ideal para jogos, treinos e uso casual no dia a dia",
  ];

  const specifications = [
    { icon: Shirt, label: "Composição", value: "100% Poliéster reciclado" },
    { icon: Package, label: "Modelo", value: "Torcedor Pro Masculina" },
    { icon: Shield, label: "Garantia", value: "90 dias contra defeitos" },
    { icon: Award, label: "Temporada", value: "Copa 2026" },
  ];

  return (
    <section className="py-4">
      <h2 className="section-title mb-4">DESCRIÇÃO DO PRODUTO</h2>
      
      <div className="space-y-5">
        {/* Main description */}
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-foreground leading-relaxed mb-3">
            A <strong>Camisa Oficial Nike Brasil Copa 2026</strong> é o manto sagrado 
            da Seleção Brasileira, desenvolvida para os verdadeiros apaixonados pelo 
            futebol nacional. Com a mais alta tecnologia Nike, oferece conforto, 
            durabilidade e o orgulho de vestir as cores do penta campeão mundial.
          </p>
          
          <p className="text-foreground leading-relaxed">
            Com design exclusivo que celebra a tradição amarelinha, a camisa traz todos 
            os detalhes oficiais da temporada, incluindo os patrocínios e o escudo 
            bordado da CBF. Perfeita para torcer pelo Brasil na Copa do Mundo, 
            jogar com os amigos ou usar no dia a dia.
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-3">
          {specifications.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 bg-muted/20 rounded-lg p-3">
              <spec.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{spec.label}</p>
                <p className="text-sm font-medium text-foreground">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features list */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Características:</h3>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Care instructions */}
        <div className="border-t border-border pt-4">
          <h3 className="text-sm font-semibold text-foreground mb-2">Instruções de Lavagem:</h3>
          <p className="text-sm text-muted-foreground">
            Lavar à máquina com água fria (máx. 30°C). Não usar alvejante. 
            Secar à sombra. Não passar ferro sobre as estampas. 
            Não lavar a seco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

import { useState } from "react";
import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "M. Silva",
    date: "13/01/2026",
    rating: 5,
    comment: "Qualidade do tecido excelente e as listras são vivas. Personalizei com meu nome e ficou perfeito.",
  },
  {
    name: "A. Santos",
    date: "12/01/2026",
    rating: 5,
    comment: "Veste muito bem, tamanho P ficou certinho. Galeria de fotos ajuda bastante a decidir.",
  },
  {
    name: "R. Costa",
    date: "08/01/2026",
    rating: 4,
    comment: "O número aplicado ficou alinhado e a cor bate com o escudo. Recomendo!",
  },
  {
    name: "L. Oliveira",
    date: "05/01/2026",
    rating: 5,
    comment: "Entrega rápida e embalagem impecável. A seleção de atleta facilita demais.",
  },
  {
    name: "C. Ferreira",
    date: "02/01/2026",
    rating: 4,
    comment: "Acabamento premium, gola confortável. Voltarei a comprar.",
  },
  {
    name: "J. Pereira",
    date: "28/12/2025",
    rating: 5,
    comment: "Material de primeira qualidade. A personalização com o nome do Cristaldo ficou impecável.",
  },
  {
    name: "F. Almeida",
    date: "25/12/2025",
    rating: 5,
    comment: "Camisa original, bordado perfeito. Chegou super rápido e bem embalada.",
  },
  {
    name: "B. Rodrigues",
    date: "22/12/2025",
    rating: 4,
    comment: "Excelente qualidade do tecido. Tamanho M veste perfeitamente conforme tabela.",
  },
  {
    name: "T. Machado",
    date: "20/12/2025",
    rating: 5,
    comment: "Produto original, cores vivas e brilhantes. Personalização ficou linda.",
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 86 },
  { stars: 4, percentage: 11 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 0.6 },
  { stars: 1, percentage: 0.4 },
];

const ReviewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-6">
      <h2 className="section-title mb-4">AVALIAÇÕES</h2>
      
      {/* Rating summary */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl font-bold text-foreground">4.9</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 fill-rating-star text-rating-star"
              />
            ))}
          </div>
          <span className="text-muted-foreground">(3.287 avaliações)</span>
        </div>
        
        {/* Rating bars */}
        <div className="space-y-2">
          {ratingDistribution.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="w-8 text-sm font-medium text-rating-star flex items-center gap-1">
                {stars} <Star className="w-3 h-3 fill-rating-star" />
              </span>
              <div className="flex-1 h-2 bg-rating-bar-bg rounded-full overflow-hidden">
                <div 
                  className="h-full bg-rating-bar rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-12 text-sm text-muted-foreground text-right">
                {percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Review cards */}
      <div className="space-y-3">
        {displayedReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      
      {/* Show more button */}
      {!showAll && reviews.length > 3 && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setShowAll(true)}
            className="btn-outline-success"
          >
            Ver mais avaliações
          </button>
        </div>
      )}
      
      {showAll && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setShowAll(false)}
            className="btn-outline-success"
          >
            Ver menos
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;

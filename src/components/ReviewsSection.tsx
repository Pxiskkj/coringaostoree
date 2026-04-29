import { useState } from "react";
import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";

const reviews = [
  { name: "G. Nunes", date: "25/04/2026", rating: 5, comment: "Camisa do Brasil chegou linda! Amarelo vibrante, qualidade Nike garantida." },
  { name: "V. Cardoso", date: "22/04/2026", rating: 5, comment: "Tecido respirável e confortável. Perfeita para torcer pela Seleção na Copa." },
  { name: "D. Martins", date: "18/04/2026", rating: 5, comment: "Camisa oficial CBF com selo de autenticidade. Bordado do escudo perfeito." },
  { name: "H. Souza", date: "15/04/2026", rating: 5, comment: "Produto chegou antes do prazo. Qualidade impecável da camisa do Brasil!" },
  { name: "P. Lima", date: "12/04/2026", rating: 4, comment: "Ótimo acabamento, veste muito bem no corpo. Cores fiéis ao original." },
  { name: "E. Barbosa", date: "08/04/2026", rating: 5, comment: "Material dry-fit de qualidade. Mantém a cor amarela vibrante após várias lavagens." },
  { name: "I. Ferraz", date: "05/04/2026", rating: 5, comment: "Camisa linda da Seleção, cores fiéis. Personalização com o Vinicius Jr ficou perfeita." },
  { name: "O. Ramos", date: "02/04/2026", rating: 4, comment: "Tecido premium. Bordados do escudo da CBF bem feitos e resistentes." },
  { name: "K. Moreira", date: "30/03/2026", rating: 5, comment: "Entrega super rápida e produto exatamente como na foto. Vou usar na Copa!" },
  { name: "N. Campos", date: "27/03/2026", rating: 5, comment: "Camisa oficial com qualidade Nike. Material respirável e muito confortável." },
  { name: "S. Teixeira", date: "24/03/2026", rating: 4, comment: "Produto original, embalagem impecável. Tamanho GG caiu certinho." },
  { name: "C. Dias", date: "20/03/2026", rating: 5, comment: "Qualidade excepcional! Personalização com meu nome ficou incrível." },
  { name: "R. Melo", date: "17/03/2026", rating: 5, comment: "Material de primeira, amarelo vibrante. Atendimento nota 10!" },
  { name: "L. Castro", date: "14/03/2026", rating: 4, comment: "Tecido dry-fit muito bom. Não esquenta e seca rápido após o suor." },
  { name: "M. Freitas", date: "11/03/2026", rating: 5, comment: "Camisa linda, bordado perfeito. Escolhi o Endrick e ficou show!" },
  { name: "A. Vieira", date: "08/03/2026", rating: 5, comment: "Produto oficial da CBF, qualidade garantida. Entrega no prazo prometido." },
  { name: "J. Cunha", date: "05/03/2026", rating: 4, comment: "Excelente qualidade do material. Perfeita para apoiar a Seleção." },
  { name: "F. Ribeiro", date: "02/03/2026", rating: 5, comment: "Camisa oficial com todos os detalhes originais. Muito satisfeito!" },
  { name: "G. Santana", date: "27/02/2026", rating: 5, comment: "Material premium, acabamento impecável. Vale cada centavo!" },
  { name: "T. Azevedo", date: "24/02/2026", rating: 4, comment: "Tecido respirável e confortável. Ideal para jogos e treinos." },
  { name: "D. Correia", date: "21/02/2026", rating: 5, comment: "Personalização perfeita! Nome e número bem aplicados e alinhados." },
  { name: "H. Monteiro", date: "18/02/2026", rating: 5, comment: "Produto original Nike. Qualidade superior e design autêntico do Brasil." },
  { name: "P. Gonçalves", date: "15/02/2026", rating: 4, comment: "Camisa de qualidade, amarelo fiel ao original da Seleção. Recomendo!" },
  { name: "E. Mendes", date: "12/02/2026", rating: 5, comment: "Material dry-fit excelente. Não retém suor e mantém o conforto." },
  { name: "I. Araújo", date: "09/02/2026", rating: 5, comment: "Entrega rápida, produto bem embalado. Qualidade nota 10!" },
  { name: "O. Carvalho", date: "06/02/2026", rating: 4, comment: "Tecido premium. Bordados do escudo da CBF resistentes e bem feitos." },
  { name: "K. Lopes", date: "04/02/2026", rating: 5, comment: "Camisa oficial com todos os selos de autenticidade. Perfeita para a Copa!" },
  { name: "N. Rocha", date: "02/02/2026", rating: 5, comment: "Material respirável e cores vivas. Personalização ficou linda!" },
  { name: "S. Pinto", date: "01/02/2026", rating: 4, comment: "Qualidade excepcional do tecido. Tamanho M ficou perfeito." },
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
    <section className="py-4">
      <h2 className="text-sm font-bold text-foreground mb-3">AVALIAÇÕES</h2>
      
      {/* Rating summary - compact */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-foreground">4.9</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-rating-star text-rating-star"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">(3.287)</span>
        </div>
        
        {/* Rating bars - compact */}
        <div className="space-y-1">
          {ratingDistribution.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-1.5">
              <span className="w-6 text-xs font-medium text-rating-star flex items-center gap-0.5">
                {stars} <Star className="w-2.5 h-2.5 fill-rating-star" />
              </span>
              <div className="flex-1 h-1.5 bg-rating-bar-bg rounded-full overflow-hidden">
                <div 
                  className="h-full bg-rating-bar rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-8 text-xs text-muted-foreground text-right">
                {percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Review cards */}
      <div className="space-y-2">
        {displayedReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      
      {/* Show more button */}
      {!showAll && reviews.length > 3 && (
        <div className="flex justify-center mt-3">
          <button 
            onClick={() => setShowAll(true)}
            className="text-xs font-medium text-primary underline hover:text-primary/80"
          >
            Ver mais avaliações
          </button>
        </div>
      )}
      
      {showAll && (
        <div className="flex justify-center mt-3">
          <button 
            onClick={() => setShowAll(false)}
            className="text-xs font-medium text-primary underline hover:text-primary/80"
          >
            Ver menos
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;

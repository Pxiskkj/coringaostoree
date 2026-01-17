import { useState } from "react";
import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";

const reviews = [
  // First 3 reviews (shown initially)
  {
    name: "G. Nunes",
    date: "18/12/2025",
    rating: 5,
    comment: "Atendimento excelente, entrega rápida. Camisa de qualidade superior.",
  },
  {
    name: "V. Cardoso",
    date: "16/12/2025",
    rating: 4,
    comment: "Tecido respirável e confortável. Ideal para usar no estádio e no dia a dia.",
  },
  {
    name: "D. Martins",
    date: "14/12/2025",
    rating: 5,
    comment: "Camisa oficial com selo de autenticidade. Número e nome aplicados perfeitamente.",
  },
  // Additional reviews
  {
    name: "H. Souza",
    date: "12/12/2025",
    rating: 5,
    comment: "Produto chegou antes do prazo. Qualidade impecável, recomendo demais!",
  },
  {
    name: "P. Lima",
    date: "10/12/2025",
    rating: 4,
    comment: "Ótimo acabamento, gola bem estruturada. Veste muito bem no corpo.",
  },
  {
    name: "E. Barbosa",
    date: "08/12/2025",
    rating: 5,
    comment: "Material dry-fit de qualidade. Não amassa e mantém a cor após várias lavagens.",
  },
  {
    name: "I. Ferraz",
    date: "06/12/2025",
    rating: 5,
    comment: "Camisa linda, cores fiéis ao clube. Personalização ficou perfeita.",
  },
  {
    name: "O. Ramos",
    date: "04/12/2025",
    rating: 4,
    comment: "Tecido de qualidade premium. Bordados bem feitos e resistentes.",
  },
  {
    name: "K. Moreira",
    date: "02/12/2025",
    rating: 5,
    comment: "Entrega super rápida e produto exatamente como na foto. Muito satisfeito!",
  },
  {
    name: "N. Campos",
    date: "30/11/2025",
    rating: 5,
    comment: "Camisa oficial com qualidade Nike. Material respirável e confortável.",
  },
  {
    name: "S. Teixeira",
    date: "28/11/2025",
    rating: 4,
    comment: "Produto original, embalagem impecável. Tamanho GG caiu certinho.",
  },
  {
    name: "C. Dias",
    date: "26/11/2025",
    rating: 5,
    comment: "Qualidade excepcional! Personalização com meu nome ficou incrível.",
  },
  {
    name: "R. Melo",
    date: "24/11/2025",
    rating: 5,
    comment: "Material de primeira, cores vibrantes. Atendimento nota 10!",
  },
  {
    name: "L. Castro",
    date: "22/11/2025",
    rating: 4,
    comment: "Tecido dry-fit muito bom. Não esquenta e seca rápido após o suor.",
  },
  {
    name: "M. Freitas",
    date: "20/11/2025",
    rating: 5,
    comment: "Camisa linda, bordado perfeito. Escolhi o Aravena e ficou show!",
  },
  {
    name: "A. Vieira",
    date: "18/11/2025",
    rating: 5,
    comment: "Produto oficial, qualidade garantida. Entrega no prazo prometido.",
  },
  {
    name: "J. Cunha",
    date: "16/11/2025",
    rating: 4,
    comment: "Excelente qualidade do material. Gola reforçada e bem acabada.",
  },
  {
    name: "F. Ribeiro",
    date: "14/11/2025",
    rating: 5,
    comment: "Camisa oficial com todos os detalhes originais. Muito satisfeito!",
  },
  {
    name: "G. Santana",
    date: "12/11/2025",
    rating: 5,
    comment: "Material premium, acabamento impecável. Vale cada centavo!",
  },
  {
    name: "T. Azevedo",
    date: "10/11/2025",
    rating: 4,
    comment: "Tecido respirável e confortável. Ideal para jogos e treinos.",
  },
  {
    name: "D. Correia",
    date: "08/11/2025",
    rating: 5,
    comment: "Personalização perfeita! Nome e número bem aplicados e alinhados.",
  },
  {
    name: "H. Monteiro",
    date: "06/11/2025",
    rating: 5,
    comment: "Produto original Nike. Qualidade superior e design autêntico.",
  },
  {
    name: "P. Gonçalves",
    date: "04/11/2025",
    rating: 4,
    comment: "Camisa de qualidade, cores fiéis ao original. Recomendo!",
  },
  {
    name: "E. Mendes",
    date: "02/11/2025",
    rating: 5,
    comment: "Material dry-fit excelente. Não retém suor e mantém o conforto.",
  },
  {
    name: "I. Araújo",
    date: "31/10/2025",
    rating: 5,
    comment: "Entrega rápida, produto bem embalado. Qualidade nota 10!",
  },
  {
    name: "O. Carvalho",
    date: "29/10/2025",
    rating: 4,
    comment: "Tecido de qualidade premium. Bordados resistentes e bem feitos.",
  },
  {
    name: "K. Lopes",
    date: "27/10/2025",
    rating: 5,
    comment: "Camisa oficial com todos os selos de autenticidade. Perfeita!",
  },
  {
    name: "N. Rocha",
    date: "25/10/2025",
    rating: 5,
    comment: "Material respirável e cores vivas. Personalização ficou linda!",
  },
  {
    name: "S. Pinto",
    date: "23/10/2025",
    rating: 4,
    comment: "Qualidade excepcional do tecido. Tamanho P ficou perfeito.",
  },
  {
    name: "C. Rezende",
    date: "21/10/2025",
    rating: 5,
    comment: "Produto original, atendimento excelente. Muito satisfeito com a compra!",
  },
  {
    name: "R. Vargas",
    date: "19/10/2025",
    rating: 5,
    comment: "Camisa de qualidade superior. Material premium e acabamento perfeito.",
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

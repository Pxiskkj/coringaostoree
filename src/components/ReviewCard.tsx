import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  verified?: boolean;
}

const ReviewCard = ({ name, date, rating, comment, verified = true }: ReviewCardProps) => {
  return (
    <div className="review-card">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{name}</span>
          {verified && (
            <span className="badge-verified">Compra verificada</span>
          )}
        </div>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      
      <div className="flex gap-0.5 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? "fill-rating-star text-rating-star" 
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      
      <p className="text-foreground text-sm leading-relaxed">{comment}</p>
    </div>
  );
};

export default ReviewCard;

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
    <div className="review-card p-2.5 bg-card rounded-lg border border-border">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground text-xs">{name}</span>
          {verified && (
            <span className="text-[10px] text-success font-medium">✓ Verificado</span>
          )}
        </div>
        <span className="text-[10px] text-muted-foreground">{date}</span>
      </div>
      
      <div className="flex gap-0.5 mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating 
                ? "fill-rating-star text-rating-star" 
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      
      <p className="text-foreground text-xs leading-relaxed">{comment}</p>
    </div>
  );
};

export default ReviewCard;

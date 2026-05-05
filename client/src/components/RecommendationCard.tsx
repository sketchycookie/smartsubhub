import { TrendingDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecommendationCardProps {
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  icon?: string;
  rating?: number;
  reason: string;
  category: string;
}

export default function RecommendationCard({
  name,
  description,
  originalPrice,
  discountedPrice,
  discount,
  icon,
  rating = 4.5,
  reason,
  category,
}: RecommendationCardProps) {
  const savings = originalPrice - discountedPrice;

  return (
    <div className="card-professional overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
      {/* Header with discount badge */}
      <div className="relative">
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary/30">{name.charAt(0)}</div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-destructive text-white px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
          <TrendingDown size={14} />
          {discount}% OFF
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-foreground text-lg">{name}</h3>
            <p className="text-xs text-accent font-medium">{category}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold text-yellow-700">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3">{description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-foreground">₹{discountedPrice}</span>
          <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            Save ₹{savings.toFixed(2)}
          </span>
        </div>

        {/* Reason */}
        <div className="bg-secondary/50 rounded-lg p-2 mb-3 border border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Why recommended:</span> {reason}
          </p>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm">
          View Details
        </Button>
      </div>
    </div>
  );
}

import { Trash2, Edit2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionCardProps {
  name: string;
  plan: string;
  price: number;
  currency?: string;
  billingCycle: "monthly" | "yearly" | "quarterly";
  icon?: string;
  nextRenewal?: string;
  category?: string;
  status?: "active" | "expiring" | "paused";
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SubscriptionCard({
  name,
  plan,
  price,
  currency = "₹",
  billingCycle,
  icon,
  nextRenewal,
  category,
  status = "active",
  onEdit,
  onDelete,
}: SubscriptionCardProps) {
  const billingLabel = {
    monthly: "Monthly",
    yearly: "Yearly",
    quarterly: "Quarterly",
  }[billingCycle];

  const statusColor = {
    active: "bg-green-50 text-green-700 border-green-200",
    expiring: "bg-yellow-50 text-yellow-700 border-yellow-200",
    paused: "bg-gray-50 text-gray-700 border-gray-200",
  }[status];

  return (
    <div className="subscription-card group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          {icon ? (
            <img
              src={icon}
              alt={name}
              className="w-10 h-10 rounded-lg object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground">{plan}</p>
          </div>
        </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="p-1.5 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Edit"
          >
            <Edit2 size={16} className="text-muted-foreground" />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 hover:bg-destructive/10 rounded-lg transition-colors"
            aria-label="Delete"
          >
            <Trash2 size={16} className="text-destructive" />
          </button>
        </div>
      </div>

      {/* Price & Cycle */}
      <div className="flex items-baseline justify-between mb-3">
        <div>
          <span className="text-2xl font-bold text-foreground">
            {currency}{price}
          </span>
          <span className="text-xs text-muted-foreground ml-1">/{billingLabel}</span>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full border ₹{statusColor}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-2 text-xs text-muted-foreground">
        {category && (
          <div className="flex items-center justify-between">
            <span>Category:</span>
            <span className="font-medium text-foreground">{category}</span>
          </div>
        )}
        {nextRenewal && (
          <div className="flex items-center justify-between">
            <span>Next renewal:</span>
            <span className="font-medium text-foreground">{nextRenewal}</span>
          </div>
        )}
      </div>

      {/* Warning for expiring */}
      {status === "expiring" && (
        <div className="mt-3 flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
          <AlertCircle size={14} className="text-yellow-700 flex-shrink-0" />
          <span className="text-xs text-yellow-700">Expiring soon</span>
        </div>
      )}
    </div>
  );
}

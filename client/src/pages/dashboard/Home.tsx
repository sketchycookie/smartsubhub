import { ArrowUpRight, ArrowDownLeft, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubscriptionCard from "@/components/SubscriptionCard";
import RecommendationCard from "@/components/RecommendationCard";

export default function Home() {
  const monthlySpend = 199 + 119 + 3489; // = 3807
  const yearlySpend = monthlySpend * 12; // = 45684
  const activeSubscriptions = 6;
  const potentialSavings = 156;

  const recentSubscriptions = [
    {
      name: "Netflix",
      plan: "Premium",
      price: 199,
      billingCycle: "monthly" as const,
      category: "Entertainment",
      nextRenewal: "Mar 15, 2026",
      status: "active" as const,
    },
    {
      name: "Spotify",
      plan: "Student",
      price: 119,
      billingCycle: "monthly" as const,
      category: "Music",
      nextRenewal: "Mar 20, 2026",
      status: "active" as const,
    },
    {
      name: "Adobe Creative Cloud",
      plan: "All Apps",
      price: 3489,
      billingCycle: "monthly" as const,
      category: "Design",
      nextRenewal: "Mar 10, 2026",
      status: "active" as const,
    },
  ];

  const recommendations = [
    {
      name: "YouTube Premium",
      description: "Ad-free videos and offline viewing",
      originalPrice: 129,
      discountedPrice: 99,
      discount: 14,
      reason: "You watch videos daily - save with annual plan",
      category: "Entertainment",
      rating: 4.7,
    },
    {
      name: "Microsoft 365",
      description: "Office + Cloud Storage",
      originalPrice: 489,
      discountedPrice: 360,
      discount: 30,
      reason: "Student discount available - you're eligible",
      category: "Productivity",
      rating: 4.6,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back !
        </h1>
        <p className="text-muted-foreground">
          Here's your subscription overview for this month
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Monthly Spend */}
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Monthly Spend
            </span>
            <ArrowUpRight className="text-destructive" size={18} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              ₹{monthlySpend}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            +2.5% from last month
          </p>
        </div>

        {/* Yearly Projection */}
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Yearly Projection
            </span>
            <TrendingUp className="text-accent" size={18} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              ₹{yearlySpend}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Based on current subscriptions
          </p>
        </div>

        {/* Active Subscriptions */}
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Active Subscriptions
            </span>
            <span className="text-2xl font-bold text-primary">
              {activeSubscriptions}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            All active and up to date
          </p>
        </div>

        {/* Potential Savings */}
        <div className="card-professional p-4 border-accent/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Potential Savings
            </span>
            <ArrowDownLeft className="text-green-600" size={18} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-green-600">
              ₹{potentialSavings}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            With smart recommendations
          </p>
        </div>
      </div>

      {/* Recent Subscriptions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-header mb-0">Your Subscriptions</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentSubscriptions.map((sub) => (
            <SubscriptionCard
              key={sub.name}
              {...sub}
              onEdit={() => console.log("Edit", sub.name)}
              onDelete={() => console.log("Delete", sub.name)}
            />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-header mb-0">Recommended for You</h2>
          <Button variant="outline" size="sm">
            See All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.name} {...rec} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Add Subscription
          </Button>
          <Button variant="outline">
            <Calendar size={16} className="mr-2" />
            View Calendar
          </Button>
          <Button variant="outline">
            View Analytics
          </Button>
          <Button variant="outline">
            Export Report
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Plus, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SubscriptionCard from "@/components/SubscriptionCard";

export default function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const subscriptions = [
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
      price: 430,
      billingCycle: "monthly" as const,
      category: "Design",
      nextRenewal: "Mar 10, 2026",
      status: "active" as const,
    },
    {
      name: "Microsoft 365",
      plan: "Personal",
      price: 489,
      billingCycle: "monthly" as const,
      category: "Productivity",
      nextRenewal: "Mar 25, 2026",
      status: "active" as const,
    },
    {
      name: "Amazon Prime",
      plan: "Annual",
      price: 1499,
      billingCycle: "yearly" as const,
      category: "Shopping",
      nextRenewal: "Jun 10, 2026",
      status: "active" as const,
    },
    {
      name: "Google Drive",
      plan: "100GB",
      price: 130,
      billingCycle: "monthly" as const,
      category: "Storage",
      nextRenewal: "Mar 28, 2026",
      status: "expiring" as const,
    },
  ];

  const categories = [
    "all",
    "Entertainment",
    "Music",
    "Design",
    "Productivity",
    "Shopping",
    "Storage",
  ];

  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesSearch = sub.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || sub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Subscriptions
          </h1>
          <p className="text-muted-foreground">
            Manage and track all your active subscriptions
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
          <Plus size={18} className="mr-2" />
          Add Subscription
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search subscriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-foreground">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="card-professional p-3 text-center">
          <div className="text-2xl font-bold text-primary">
            {subscriptions.length}
          </div>
          <div className="text-xs text-muted-foreground">Total Active</div>
        </div>
        <div className="card-professional p-3 text-center">
          <div className="text-2xl font-bold text-accent">
          ₹{
  subscriptions.reduce((sum, s) => {
    return sum + (s.billingCycle === "yearly" ? s.price / 12 : s.price);
  }, 0).toFixed(2)
}
          </div>
          <div className="text-xs text-muted-foreground">Monthly Cost</div>
        </div>
        <div className="card-professional p-3 text-center">
          <div className="text-2xl font-bold text-green-600">
            {subscriptions.filter((s) => s.status === "active").length}
          </div>
          <div className="text-xs text-muted-foreground">Active</div>
        </div>
        <div className="card-professional p-3 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {subscriptions.filter((s) => s.status === "expiring").length}
          </div>
          <div className="text-xs text-muted-foreground">Expiring Soon</div>
        </div>
      </div>

      {/* Subscriptions Grid */}
      <div>
        {filteredSubscriptions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubscriptions.map((sub) => (
              <SubscriptionCard
                key={sub.name}
                {...sub}
                onEdit={() => console.log("Edit", sub.name)}
                onDelete={() => console.log("Delete", sub.name)}
              />
            ))}
          </div>
        ) : (
          <div className="card-professional p-12 text-center">
            <p className="text-muted-foreground mb-4">
              No subscriptions found matching your criteria
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus size={18} className="mr-2" />
              Add Your First Subscription
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

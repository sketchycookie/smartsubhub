import { Music, Film, Briefcase, Cloud, ShoppingBag, BarChart3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Categories() {
  const categories = [
    {
      name: "Entertainment",
      icon: Film,
      color: "from-purple-500 to-pink-500",
      count: 1,
      cost: 199,
      subscriptions: ["Netflix"],
    },
    {
      name: "Music & Audio",
      icon: Music,
      color: "from-green-500 to-emerald-500",
      count: 1,
      cost: 119,
      subscriptions: ["Spotify"],
    },
    {
      name: "Productivity",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      count: 2,
      cost: 3849,
      subscriptions: ["Adobe Creative Cloud", "Microsoft 365"],
    },
    {
      name: "Cloud Storage",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      count: 1,
      cost: 130,
      subscriptions: ["Google Drive"],
    },
    {
      name: "Shopping & Retail",
      icon: ShoppingBag,
      color: "from-indigo-500 to-purple-500",
      count: 1,
      cost: 1499,
      subscriptions: ["Amazon Prime"],
    },
  ];

  const totalCategories = categories.length;
  const totalSubscriptions = categories.reduce((sum, c) => sum + c.count, 0);
  const totalCost = categories.reduce((sum, c) => sum + c.cost, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Subscription Categories
          </h1>
          <p className="text-muted-foreground">
            Organize and manage subscriptions by type
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
          <Plus size={18} className="mr-2" />
          New Category
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Categories
            </span>
            <BarChart3 size={18} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {totalCategories}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Total categories
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Subscriptions
            </span>
            <BarChart3 size={18} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {totalSubscriptions}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Across all categories
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Monthly Cost
            </span>
            <BarChart3 size={18} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold text-foreground">
          ₹{totalCost.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Total monthly spending
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const percentage = ((category.cost / totalCost) * 100).toFixed(1);
          return (
            <div
              key={category.name}
              className="card-professional overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Header with gradient */}
              <div
                className={`h-24 bg-gradient-to-br ₹{category.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon size={40} className="text-white" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {category.name}
                </h3>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-secondary/50 rounded p-2">
                    <div className="text-xs text-muted-foreground">Items</div>
                    <div className="text-lg font-bold text-foreground">
                      {category.count}
                    </div>
                  </div>
                  <div className="bg-secondary/50 rounded p-2">
                    <div className="text-xs text-muted-foreground">Cost</div>
                    <div className="text-lg font-bold text-foreground">
                      ₹{category.cost.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Percentage */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      Of total spending
                    </span>
                    <span className="text-xs font-bold text-primary">
                      {percentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `₹{percentage}%` }}
                    />
                  </div>
                </div>

                {/* Subscriptions List */}
                <div className="space-y-1 mb-3">
                  {category.subscriptions.map((sub) => (
                    <div
                      key={sub}
                      className="text-xs text-muted-foreground flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {sub}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm"
                >
                  Manage Category
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Category Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Group similar subscriptions to better track spending</li>
          <li>• Create custom categories based on your needs</li>
          <li>• Set budget limits per category</li>
          <li>• Review categories monthly to find unused subscriptions</li>
        </ul>
      </div>
    </div>
  );
}

import { Calendar, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RenewalCalendar() {
  const renewals = [
    {
      date: "Mar 10, 2026",
      subscriptions: [
        { name: "Adobe Creative Cloud", price: 3489, daysUntil: 4 },
      ],
    },
    {
      date: "Mar 15, 2026",
      subscriptions: [
        { name: "Netflix Premium", price: 199, daysUntil: 9 },
      ],
    },
    {
      date: "Mar 20, 2026",
      subscriptions: [
        { name: "Spotify Student", price: 119, daysUntil: 14 },
      ],
    },
    {
      date: "Mar 25, 2026",
      subscriptions: [
        { name: "Microsoft 365", price: 489, daysUntil: 19 },
      ],
    },
    {
      date: "Mar 28, 2026",
      subscriptions: [
        { name: "Google Drive 100GB", price: 130, daysUntil: 22 },
      ],
    },
    {
      date: "Jun 10, 2026",
      subscriptions: [
        { name: "Amazon Prime Annual", price: 1499, daysUntil: 96 },
      ],
    },
  ];

  const upcomingThisMonth = renewals.filter((r) => {
    const date = new Date(r.date);
    const now = new Date();
    return (
      date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
    );
  });

  const totalUpcoming = renewals.reduce(
    (sum, r) => sum + r.subscriptions.reduce((s, sub) => s + sub.price, 0),
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Renewal Calendar
        </h1>
        <p className="text-muted-foreground">
          Track all your upcoming subscription renewals
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              This Month
            </span>
            <Calendar size={18} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {upcomingThisMonth.length}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Renewals scheduled
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Total Cost
            </span>
            <Clock size={18} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{totalUpcoming.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Next 90 days
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Urgent
            </span>
            <AlertCircle size={18} className="text-destructive" />
          </div>
          <div className="text-2xl font-bold text-destructive">
            {renewals.filter((r) => r.subscriptions.some((s) => s.daysUntil <= 7)).length}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Within 7 days
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h2 className="section-header">Upcoming Renewals</h2>
        <div className="space-y-3">
          {renewals.map((renewal, idx) => {
            const hasUrgent = renewal.subscriptions.some((s) => s.daysUntil <= 7);
            return (
              <div
                key={idx}
                className={`card-professional p-4 border-l-4 ₹{
                  hasUrgent ? "border-l-destructive" : "border-l-accent"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="font-semibold text-foreground">
                        {renewal.date}
                      </span>
                      {hasUrgent && (
                        <span className="text-xs font-bold text-white bg-destructive px-2 py-0.5 rounded-full">
                          URGENT
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {renewal.subscriptions.map((sub) => (
                        <div
                          key={sub.name}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-foreground">{sub.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-muted-foreground">
                              ₹{sub.price}
                            </span>
                            <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
                              {sub.daysUntil} days
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Manage
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Pro Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Set reminders before renewal dates to avoid surprises</li>
          <li>• Review subscriptions you no longer use</li>
          <li>• Look for annual plans to save on monthly costs</li>
          <li>• Check for student or family discounts</li>
        </ul>
      </div>
    </div>
  );
}

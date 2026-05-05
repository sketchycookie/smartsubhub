import { Home, Zap, BarChart3, Calendar, TrendingDown, Compass, Tag, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { label: "Home", icon: Home, href: "/dashboard/home" },
  { label: "My Subscriptions", icon: Zap, href: "/dashboard/subscriptions" },
  { label: "Renewal Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { label: "Savings Tracker", icon: TrendingDown, href: "/dashboard/savings" },
  { label: "Categories", icon: Tag, href: "/dashboard/categories" },
  { label: "Explore", icon: Compass, href: "/dashboard/explore" },
  { label: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
];

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [location] = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sidebarClass = isMobile
    ? `fixed inset-0 z-30 bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`
    : "";

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isMobile
            ? `fixed left-0 top-0 h-screen w-64 z-30 transition-transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "w-64"
        } bg-sidebar border-r border-sidebar-border flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-bold text-sidebar-foreground">Dashboard</h2>
          {isMobile && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              <X size={20} className="text-sidebar-foreground" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a
                      onClick={() => isMobile && onClose?.()}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent/30 rounded-lg p-3">
            <p className="text-xs font-medium text-sidebar-foreground mb-2">
              Manage all subscriptions
            </p>
            <p className="text-xs text-sidebar-foreground/70">
              Save up to 40% with smart recommendations
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

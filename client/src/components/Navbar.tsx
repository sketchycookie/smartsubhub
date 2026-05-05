import { Menu, Bell, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onMenuClick?: () => void;
  userName?: string;
}

export default function Navbar({ onMenuClick, userName = "" }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={20} className="text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SH</span>
            </div>
            <span className="hidden sm:inline font-bold text-foreground">Smart Hub</span>
          </div>
        </div>

        {/* Right: Notifications & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <button
            className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={20} className="text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {userName}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

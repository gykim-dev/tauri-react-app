import { useState } from 'react';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { cn } from '@/lib/utils';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="fixed inset-0 flex bg-muted/20 text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          'hidden md:flex h-full shrink-0 border-r border-border/40 bg-background z-50 transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-16' : 'w-64',
        )}
      >
        <SideBar
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
      </aside>

      {/* Topbar */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
        <header className="w-full shrink-0 bg-background z-40 pt-[env(safe-area-inset-top)]">
          <div className="h-14 w-full">
            <TopBar />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 min-h-0 overflow-y-auto outline-none bg-background">
          <div className="w-full max-w-5xl mx-auto p-5 md:p-8 flex flex-col min-h-full">
            {children}
            <div className="h-16 md:h-0 shrink-0 pb-[env(safe-area-inset-bottom)]" />
          </div>
        </main>

        {/* Bottombar */}
        <nav className="md:hidden w-full shrink-0 border-t border-border/40 bg-background z-40 pb-[env(safe-area-inset-bottom)]">
          <div className="h-14 w-full">
            <BottomBar />
          </div>
        </nav>
      </div>
    </div>
  );
};

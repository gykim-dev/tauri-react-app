import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-14 shrink-0 z-40 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        <h1 className="text-base font-bold md:text-lg text-primary md:hidden">
          Starter App
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full text-muted-foreground hover:text-primary transition-colors"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full p-0 overflow-hidden border border-transparent hover:border-primary/30 transition-all"
          onClick={() => navigate('/profile')}
        >
          <Avatar className="h-full w-full pointer-events-none">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-primary/5 text-primary">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

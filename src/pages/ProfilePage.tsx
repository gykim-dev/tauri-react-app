import { User, Mail, ChevronRight, LogOut, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PagePlaceholder } from '@/components/PagePlaceholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <PagePlaceholder>
      <div className="w-full mx-auto space-y-4">
        <Card className="border-border bg-card/50 shadow-sm overflow-hidden">
          <CardHeader className="pb-4 pt-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border-2 border-primary/20 shadow-sm text-primary">
                <User className="h-10 w-10" />
              </div>
              <div className="space-y-0.5">
                <CardTitle className="text-lg font-bold text-foreground">
                  GY
                </CardTitle>
                <CardDescription className="text-xs font-medium text-primary/70">
                  Developer
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="divide-y divide-border border-t border-border">
              {[
                {
                  icon: Mail,
                  label: t('profile.fields.email'),
                  value: 'dev@example.com',
                },
                {
                  icon: Globe,
                  label: t('profile.fields.website'),
                  value: '.dev',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {item.value}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button
          variant="ghost"
          className="w-full h-11 justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border rounded-xl transition-all cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-xs font-bold">
            {t('profile.buttons.signOut')}
          </span>
        </Button>
      </div>
    </PagePlaceholder>
  );
};

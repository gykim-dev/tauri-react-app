import {
  Home,
  LayoutTemplate,
  Palette,
  Rocket,
  ChevronRight,
  Info,
} from 'lucide-react';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <PagePlaceholder>
      <div className="w-full mx-auto space-y-4">
        <Card className="border-border bg-card/50 shadow-sm overflow-hidden">
          <CardHeader className="pb-4 pt-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border-2 border-primary/20 shadow-sm text-primary">
                <Home className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-lg font-bold text-foreground tracking-tight">
                  {t('home.title')}
                </CardTitle>
                <CardDescription className="text-xs font-medium text-primary/70">
                  {t('home.subtitle')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="divide-y divide-border border-t border-border">
              {[
                {
                  icon: LayoutTemplate,
                  label: t('home.features.responsive.label'),
                  description: t('home.features.responsive.description'),
                },
                {
                  icon: Palette,
                  label: t('home.features.theming.label'),
                  description: t('home.features.theming.description'),
                },
                {
                  icon: Rocket,
                  label: t('home.features.stack.label'),
                  description: t('home.features.stack.description'),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors cursor-default group"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="h-4.5 w-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground tracking-tight">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/20" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="ghost"
            className="h-24 flex-col gap-2 border border-border bg-card/30 hover:bg-muted/50 rounded-2xl transition-all group"
          >
            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <LayoutTemplate className="h-5 w-5 text-primary/60 group-hover:text-primary" />
            </div>
            <span className="text-[11px] font-bold text-foreground">
              {t('home.buttons.explore')}
            </span>
          </Button>
          <Button
            variant="ghost"
            className="h-24 flex-col gap-2 border border-border bg-card/30 hover:bg-muted/50 rounded-2xl transition-all group"
          >
            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <Palette className="h-5 w-5 text-primary/60 group-hover:text-primary" />
            </div>
            <span className="text-[11px] font-bold text-foreground">
              {t('home.buttons.styles')}
            </span>
          </Button>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p
            className="text-[11px] text-primary/80 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: t('home.info.text') }}
          />
        </div>
      </div>
    </PagePlaceholder>
  );
};

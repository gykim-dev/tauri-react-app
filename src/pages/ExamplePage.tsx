import { Layers, CheckCircle2, Info } from 'lucide-react';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export const ExamplePage = () => {
  const { t } = useTranslation();

  return (
    <PagePlaceholder>
      <div className="w-full mx-auto space-y-4">
        <Card className="border-border bg-card/50 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2.5 mb-1 text-primary">
              <Layers className="h-5 w-5" />
              <CardTitle className="text-lg font-bold">
                {t('example.title')}
              </CardTitle>
            </div>
            <CardDescription className="text-xs">
              {t('example.subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background/50"
              >
                <CheckCircle2 className="h-4 w-4 text-primary opacity-70" />
                <span className="text-sm text-foreground">
                  {t('example.contentItem', { number: i })}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-primary/80 leading-relaxed">
            {t('example.info.text')}
          </p>
        </div>
      </div>
    </PagePlaceholder>
  );
};

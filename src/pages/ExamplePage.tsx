import { Layers, CheckCircle2, Info } from 'lucide-react';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const ExamplePage = () => {
  return (
    <PagePlaceholder>
      <div className="w-full mx-auto space-y-4">
        <Card className="border-border bg-card/50 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2.5 mb-1 text-primary">
              <Layers className="h-5 w-5" />
              <CardTitle className="text-lg font-bold">Example Page</CardTitle>
            </div>
            <CardDescription className="text-xs">
              This is a dummy page to demonstrate the layout expansion.
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
                  Dummy content item # {i}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-primary/80 leading-relaxed">
            You can use this page as a starting point for your new features. All
            components are already styled to match the theme.
          </p>
        </div>
      </div>
    </PagePlaceholder>
  );
};

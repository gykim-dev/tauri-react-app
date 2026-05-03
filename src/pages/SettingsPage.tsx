import { Settings, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/theme/useTheme';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const SettingsPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <PagePlaceholder>
      <div className="w-full mx-auto">
        <Card className="border-border bg-card/50 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2.5 mb-1 text-primary">
              <Settings className="h-5 w-5" />
              <CardTitle className="text-lg font-bold">Appearance</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Customize the look and feel of your interface.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RadioGroup
              defaultValue={theme}
              onValueChange={(value) =>
                setTheme(value as 'light' | 'dark' | 'system')
              }
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { id: 'light', label: 'Light', icon: Sun },
                { id: 'dark', label: 'Dark', icon: Moon },
                { id: 'system', label: 'System', icon: Monitor },
              ].map(({ id, label, icon: Icon }) => (
                <div key={id}>
                  <RadioGroupItem value={id} id={id} className="peer sr-only" />
                  <Label
                    htmlFor={id}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-muted bg-popover hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all h-full"
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-xs font-semibold">{label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    </PagePlaceholder>
  );
};

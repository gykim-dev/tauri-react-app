import { Settings, Sun, Moon, Monitor, Languages } from 'lucide-react';
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
import { useTranslation } from 'react-i18next';

export const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <PagePlaceholder>
      <div className="w-full mx-auto flex flex-col sm:flex-row gap-4">
        <Card className="border-border bg-card/50 shadow-sm flex-1">
          <CardHeader className="pb-0">
            <div className="flex items-center gap-2.5 mb-1 text-primary">
              <Settings className="h-5 w-5" />
              <CardTitle className="text-lg font-bold">
                {t('settings.appearance.title')}
              </CardTitle>
            </div>
            <CardDescription className="text-xs">
              {t('settings.appearance.description')}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RadioGroup
              defaultValue={theme}
              onValueChange={(value) =>
                setTheme(value as 'light' | 'dark' | 'system')
              }
              className="grid grid-cols-3 gap-3"
            >
              {[
                { id: 'light', label: t('settings.theme.light'), icon: Sun },
                { id: 'dark', label: t('settings.theme.dark'), icon: Moon },
                {
                  id: 'system',
                  label: t('settings.theme.system'),
                  icon: Monitor,
                },
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

        <Card className="border-border bg-card/50 shadow-sm flex-1">
          <CardHeader className="pb-0">
            <div className="flex items-center gap-2.5 mb-1 text-primary">
              <Languages className="h-5 w-5" />
              <CardTitle className="text-lg font-bold">
                {t('settings.language.title')}
              </CardTitle>
            </div>
            <CardDescription className="text-xs">
              {t('settings.language.description')}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RadioGroup
              defaultValue={i18n.language.split('-')[0]}
              onValueChange={(value) => i18n.changeLanguage(value)}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { id: 'en', label: 'English' },
                { id: 'ko', label: '한국어' },
              ].map(({ id, label }) => (
                <div key={id}>
                  <RadioGroupItem value={id} id={id} className="peer sr-only" />
                  <Label
                    htmlFor={id}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl border border-muted bg-popover hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all h-full"
                  >
                    <span className="text-sm font-semibold">{label}</span>
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

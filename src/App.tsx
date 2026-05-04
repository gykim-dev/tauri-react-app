import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ExamplePage } from '@/pages/ExamplePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';
import { PATHS } from '@/configs/menuConfig';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.EXAMPLE} element={<ExamplePage />} />
        <Route path={PATHS.PROFILE} element={<ProfilePage />} />
        <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

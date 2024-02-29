import { LoginScreen } from './app/screens';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { MainScreen } from './app/ui/layouts';

export default function App() {
  return (
    <MainScreen>
      <LoginScreen />
    </MainScreen>
  );
}

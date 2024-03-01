if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { MainScreen } from './app/ui/layouts';
import ListingEditScreen from './app/screens/ListingEditScreen/ListingEditScreen';

export default function App() {
  return (
    <MainScreen>
      <ListingEditScreen />
    </MainScreen>
  );
}

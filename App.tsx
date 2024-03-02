if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import ListingEditScreen from './app/screens/ListingEditScreen/ListingEditScreen';

export default function App() {
  return <ListingEditScreen />;
}

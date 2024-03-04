import ListingEditScreen from './app/screens/ListingEditScreen/ListingEditScreen';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {
  return <ListingEditScreen />;
}

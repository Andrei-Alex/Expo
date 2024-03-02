if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import MessagesScreen from './app/screens/MessageScreen/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
}

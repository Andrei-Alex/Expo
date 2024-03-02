if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import { useEffect } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { MainScreen } from './app/ui';

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <MainScreen>
      <></>
    </MainScreen>
  );
}

import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export const useCameraPermissions = () => {
  useEffect(() => {
    (async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) {
        alert('You need to enable permission to access the library');
      }
    })();
  }, []);
};

import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState<Object>();

  useEffect(() => {
    (async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;
        const {
          coords: { latitude, longitude }
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
      } catch (e) {
        console.error('Failed to retrieve location.');
      }
    })();
  }, []);

  return [location, setLocation];
};

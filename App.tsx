if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import { useState } from 'react';

import { MainScreen, ImageInput } from './app/ui';

export default function App() {
  const [ImageUri, setImageUri] = useState<string | null>(null);

  return (
    <MainScreen>
      <ImageInput
        imageUri={ImageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </MainScreen>
  );
}

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import { useState } from 'react';

import { MainScreen, ImageInputList } from './app/ui';

export default function App() {
  const [imageURIs, setImageURIs] = useState<string[] | null>([]);

  const handleAdd = (uri) => {
    setImageURIs([...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setImageURIs(imageURIs.filter((imageURI) => imageURI !== uri));
  };

  return (
    <MainScreen>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </MainScreen>
  );
}

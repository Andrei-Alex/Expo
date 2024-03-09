import { useCallback, useEffect, useState } from 'react';

import { UseApiOptions } from '.';

export function useApi<T>({ apiFunc, initialData }: UseApiOptions<T>) {
  const [data, setData] = useState<T | null>(initialData ?? null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) {
      setError(true);
    } else {
      setError(false);
      setData(response.data);
    }
  }, [apiFunc]);

  useEffect(() => {
    request();
  }, [request]);

  return { data, error, loading, request };
}

import { useState, useEffect } from "react";

interface IUseFetchData<T> {
  data: T;
  isLoading: boolean;
}

export function useFetchData<T>(url: string, defaultValue: T): IUseFetchData<T> {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
}

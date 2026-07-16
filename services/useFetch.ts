import { useEffect, useState } from "react";

const useFetch = <T>(fetchFucntion: () => Promise<T>, autoFetch: true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFucntion();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("an error occured"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

 
  return { data, loading, error, refetch: fetchData, reset };
};
export default useFetch;

import { useEffect, useState } from "react";

type UseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T>(url: string): UseFetchResult<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, {signal: controller.signal});
                if (!response.ok) throw new Error('Error');
                const data = await response.json();
                setData(data);
            }
            catch (error) {
                if (error instanceof Error && error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })()

        return () => controller.abort();
    }, [url])

    return {data: data, loading: loading, error: error}
}
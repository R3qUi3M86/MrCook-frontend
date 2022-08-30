import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setStatus(response.status);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setStatus(response.status);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return {data, status, loading, error, refetch}
}

export default useFetch;
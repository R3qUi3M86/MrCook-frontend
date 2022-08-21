import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, method, payload) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        switch(method){
            case "GET":
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
                break;

            case "PUT":
                axios
                    .put(url, payload)
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
                break;

            default:
                console.log("invalid method");
        }
    }, [url, method, payload]);

    const refetch = () => {
        setLoading(true);

        switch(method){
            case "GET":
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
                break;

            case "PUT":
                axios
                    .put(url, payload)
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
                break;

            default:
                console.log("invalid method");
        }
    }

    return {data, status, loading, error, refetch}
}

export default useFetch;
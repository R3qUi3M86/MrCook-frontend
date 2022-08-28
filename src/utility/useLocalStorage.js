import { useEffect, useState } from "react"

function useLocalStorage (defaultValue, key) { 
    const [value, setValue] = useState(() => {
        const localStorageVal = localStorage.getItem(key);

        return localStorageVal !== null ? JSON.parse(localStorageVal) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage
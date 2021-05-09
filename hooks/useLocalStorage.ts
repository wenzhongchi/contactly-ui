/* eslint-disable functional/no-try-statement */

import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
    const readValue = () => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error read localStorage key “${key}”:`, error); // eslint-disable-line
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = (value: T) => {
        if (typeof window == "undefined") {
            console.warn(`not a browser`); // eslint-disable-line
        }

        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
            window.dispatchEvent(new Event("localStorage"));
        } catch (error) {
            console.warn(`Error set localStorage key “${key}”:`, error); // eslint-disable-line
        }
    };

    useEffect(() => {
        setStoredValue(readValue());
    }, []); // eslint-disable-line

    useEffect(() => {
        const handleStorageChange = () => {
            setStoredValue(readValue());
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("localStorage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("localStorage", handleStorageChange);
        };
    }, []); // eslint-disable-line

    return [storedValue, setValue];
};

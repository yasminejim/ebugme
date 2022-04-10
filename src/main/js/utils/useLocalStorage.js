import { useState, useEffect } from "react";

/**
 * This function reaches out to the browsers local storage and retrieve the value stored within a specified key
 * Then parses that data into a usable JSON format.
 *
 * @param {*} key Name of the data you want to store
 * @param {*} defaultValue Value to provide in the event no data exists
 * @returns Date stored in local storage at specified key
 */
export const getStorageValue = (key, defaultValue) => {
    // Getting stored value
    const saved = localStorage.getItem(key);
    // Parsing stored value
    const initial = JSON.parse(saved);
    // Returning stored value or default value if stored value does not exists
    return initial || defaultValue;
};

/**
 * This function converts data into a string represented format.
 * Then stores the value within the local storage at a specified key.
 *
 * @param {*} key Name of the data you want to store
 * @param {*} defaultValue Value to provide in the event no data exists
 * @returns Date stored in local storage at specified key
 */
export const useLocalStorage = (key, defaultValue) => {
    // setting up state variables ot hold any data currently at specified key
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });
    // Storing the latest version of the input value once it's changed
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // Returning updated data if there has been a change
    return [value, setValue];
};

import React, { useEffect, useState } from "react";

export function useDebounce (value: unknown, delay: unknown) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)
        return ()=>{
            clearTimeout(timer)
        }
    },[value, delay])
    return debounceValue
}
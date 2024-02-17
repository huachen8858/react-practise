import React, { useEffect, useState } from 'react'

export default function useLocalStroage(key, defaultValue) {
  const [value, setValue] = useState(()=>{
    let currentValue

    try {
      if (typeof window !== 'undefined') {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
      } else {
        currentValue = defaultValue;
      }
    } catch (ex) {
      console.log(ex);
      currentValue = defaultValue;
    }

    return currentValue
  })

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value])

  return [value, setValue]
}

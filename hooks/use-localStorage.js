import { useEffect, useState } from 'react'

export default function useLocalStroage(key, defaultValue) {
  const [value, setValue] = useState(()=>{
    let currentValue

    if (typeof window !== 'undefined') {
      try {
        const storedValue = localStorage.getItem(key);
        currentValue = storedValue ? JSON.parse(storedValue) : defaultValue;
      } catch (ex) {
        console.error('Error retrieving value from localStorage:', ex);
      }
    }Ｆ

    return currentValue
  })

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value])

  return [value, setValue]
}

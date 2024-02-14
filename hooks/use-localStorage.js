import React, { useEffect, useState } from 'react'

export default function useLocalStroage(key, defaultValue) {
  const [value, setValue] = useState(()=>{
    let currentValue

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (ex) {
      console.log(ex);
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

import { useContext, useState } from 'react'

// 宣告要使用的 context
import { createContext } from 'react'
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // 將 _app.js 內寫好的剪下貼過來
  const [color, setColor] = useState('light') // 'light' | 'dark'

  // 切換顏色的按鈕開關，然後再將此宣告函式傳出
  const toggleColor = () => {
    if (color === 'light') setColor('dark')
    else setColor('light')
  }

  return (
    <ThemeContext.Provider value={{ color, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

//不是元件是勾子不用大寫開頭
export function useTheme() {
  return useContext(ThemeContext)
}

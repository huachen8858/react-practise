import { useTheme } from '@/hooks/use-theme'

import Switch from 'react-switch'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

export default function ThemeSwitch() {
  const { color, toggleColor } = useTheme()

  return (
    <Switch
      checked={color === 'light' ? true : false}
      height={50}
      width={120}
      offColor="#1d1f2f"
      onColor="#FDB813"
      checkedIcon={<IoMdSunny className={'switch-' + color} color="white" />}
      uncheckedIcon={<IoMdMoon className={'switch-' + color} color="white"/>}
      onChange={toggleColor}
    />
  )
}

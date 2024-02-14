import React, { useEffect, useState } from 'react'
import styles from '@/styles/tree-view.module.css'
import menusData from '@/data/menu-data'
import MenuList from './menu-list'

export default function TreeView() {
  const [menus, setMenu] = useState([])

  useEffect(()=>{
    setMenu(menusData)
  }, [])
  
  return (
    <div className={styles['tree-view-container']}>
      <MenuList list={menusData}/>
    </div>
  )
}

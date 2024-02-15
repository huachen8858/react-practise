import React, { useEffect, useState } from "react";
import styles from "@/styles/tree-view.module.css";
import menusData from "@/data/menu-data";
import MenuList from "./menu-list";
import Back from "@/components/back";

export default function TreeView() {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menusData);
  }, []);

  return (
    <div style={{display: "flex", gap: "10px"}}>
      <div className={styles["tree-view-container"]}>
        <MenuList list={menusData} />
      </div>
      <div style={{marginTop: "95vh"}}>
      <Back/>
      </div>
    </div>
  );
}

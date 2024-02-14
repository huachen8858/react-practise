import React from "react";
import styles from "@/styles/tree-view.module.css";
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className={styles["menu-list-container"]}>
      {list && list.length
        ? list.map((listItem, i) => {
            return <MenuItem key={i} item={listItem} />;
          })
        : null}
    </ul>
  );
}

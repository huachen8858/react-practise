import { useState } from "react";
import MenuList from "./menu-list";
import styles from "@/styles/tree-view.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };
  // console.log(displayCurrentChildren);

  return (
    <li>
      <div className={styles["menu-item"]}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={15} />
            ) : (
              <FaPlus color="#fff" size={15} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

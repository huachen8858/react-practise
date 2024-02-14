import React, { useState } from "react";
import styles from "@/styles/accordian.module.css";
import accordianData from "@/data/accordian-data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    // console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };
  return (
    <div className={styles["wrapper"]}>
    <h1 className={styles['page-title']}>Accordian</h1>
      <div className={styles['accordian']}>
        {accordianData && accordianData.length > 0 ? (
          accordianData.map((dataItem) => (
            <div className={styles["acc-item"]} key={dataItem.id}>
              <div
                className={styles["acc-title"]}
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div className={styles['acc-content']}>{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>Data Not Found !</div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "@/styles/accordian.module.css";
import accordianData from "@/data/accordian-data";
import Back from "@/components/back";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    // console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    let copyMutiple = [...multiple];
    // 找出點擊的item index
    const findIndextOfCurrentId = copyMutiple.indexOf(currentId);
    // 如果沒找到就添加陣列的展開複製的 copyMutiple
    if (findIndextOfCurrentId === -1) copyMutiple.push(currentId);
    // 如果有就移除
    else copyMutiple.splice(findIndextOfCurrentId, 1);

    setMultiple(copyMutiple);
  };

  // console.log(selected, multiple);

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["page-title"]}>01 Accordian</h1>
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi Selection
      </button>
      <div className={styles["accordian"]}>
        {accordianData && accordianData.length > 0 ? (
          accordianData.map((dataItem) => (
            <div className={styles["acc-item"]} key={dataItem.id}>
              <div
                className={styles["acc-title"]}
                onClick={
                  enableMultiSelection
                    ? () => {
                        handleMultiSelection(dataItem.id);
                      }
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className={styles["acc-content"]}>
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className={styles["acc-content"]}>
                      {dataItem.answer}
                    </div>
                  )}
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className={styles["acc-content"]}>{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>Data Not Found !</div>
        )}
      </div>
      <Back />
    </div>
  );
}

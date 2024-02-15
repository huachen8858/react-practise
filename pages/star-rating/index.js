import { useEffect, useState } from "react";
import styles from "@/styles/star.module.css";
import { FaStar } from "react-icons/fa";
import Back from "@/components/back";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [value] = useState(100);
  const [iconValue, setIconValue] = useState(5);
  const size = 80;

  // 處理滑鼠滑動到的位置並判斷是半顆或是一顆
  const handleMousemove = (e, i) => {
    if (rating === 0) {
      const svgDom = document.getElementsByClassName("star")[i];
      const pathDom = svgDom.children[0];
      const starLeft = svgDom.getBoundingClientRect().left;
      const mouseX = e.pageX - starLeft;

      // 計算相對位置
      const halfStar = mouseX <= size / 2;
      const hoverValue = i + (halfStar ? 0.5 : 1);

      // 設定評分和星星狀態
      setHover(hoverValue);
      pathDom.style.fill = halfStar ? "url(#orange_red)" : "";
    }
  };

  // 處理滑鼠點按
  const handleClick = (e, i) => {
    const svgDom = document.getElementsByClassName("star")[i];
    const pathDom = svgDom.children[0];
    const starLeft = svgDom.getBoundingClientRect().left;
    const mouseX = e.pageX - starLeft;

    // 計算相對位置
    const halfStar = mouseX <= size / 2;
    const ratingValue = i + (halfStar ? 0.5 : 1);

    // 設定評分和星星狀態
    setRating(ratingValue);
    pathDom.style.fill = halfStar ? "url(#orange_red)" : "";
  };

  // 處理滑鼠雙擊
  const handleDoubleClick = () => {
    setRating(0);
  };

  useEffect(() => {
    setHover(0);
  }, [rating]);

  return (
    <>
      <div className={styles['star-container']}>
        <div id="start-wrap">
          <svg className={styles["linear-gradient-template"]}>
            <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="50%"
                style={{ stopColor: "rgb(255, 193, 7)" }}
              ></stop>
              <stop
                offset="50%"
                style={{ stopColor: "rgb(228, 229, 233)" }}
              ></stop>
            </linearGradient>
          </svg>
          {[...Array(iconValue)].map((icon, i) => {
            const value = i + 1;
            return (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label
                key={icon}
                style={{ cursor: "pointer" }}
                onDoubleClick={handleDoubleClick}
              >
                <FaStar
                  className="star"
                  // color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  color={
                    rating === 0
                      ? value <= hover
                        ? "#ffc107"
                        : "#e4e5e9"
                      : value <= rating
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                  size={size}
                  onMouseEnter={(e) => handleMousemove(e, i)}
                  onMouseLeave={() => {
                    if (rating === 0) {
                      let svgDom = document.getElementsByClassName("star")[i];
                      let pathDom = svgDom.children[0];
                      pathDom.style.fill = "";
                    }
                  }}
                  onMouseMove={(e) => {
                    handleMousemove(e, i);
                  }}
                  onClick={(e) => {
                    handleClick(e, i);
                  }}
                />
              </label>
            );
          })}
        </div>
        <div className={styles['text']}>正在評: {hover ? hover : 0} 分</div>
        <div className={styles['text']}>已評分: {rating} 分</div>
        <div>(雙擊星星可復原)</div>
        <Back/>
      </div>
    </>
  );
}

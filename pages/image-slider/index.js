import React, { useEffect, useState } from "react";
import styles from "@/styles/image-slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Back from "@/components/back";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (ex) {
      setErrorMsg(ex.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setLoading(true);
    if (images) fetchImages();
    // console.log(images);
  }, []);

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }
  return (
    <>
      {loading ? (
        <div className={styles["slider-container"]}>Loading Data ...</div>
      ) : (
        <>
          <div style={{ padding: "20px" }}>
            <Back />
          </div>
          <div className={styles["slider-container"]}>
            <div onClick={handlePrevious} className={styles["arrow-left"]}>
              <BsArrowLeftCircleFill size={20} />
            </div>
            {images && images.length
              ? images.map((imageItem, index) => {
                  return (
                    <img
                      key={imageItem.id}
                      src={imageItem.download_url}
                      alt={imageItem.download_url}
                      className={
                        currentSlide === index
                          ? styles["current-image"]
                          : `${styles["current-image"]} ${styles["hide-current-image"]}`
                      }
                    />
                  );
                })
              : null}
            <div onClick={handleNext} className={styles["arrow-right"]}>
              <BsArrowRightCircleFill size={20} />
            </div>

            <span className={styles["circle-indicators"]}>
              {images && images.length
                ? images.map((v, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          currentSlide === index
                            ? styles["current-indicator"]
                            : `${styles["current-indicator"]} ${styles["inactive-indicator"]}`
                        }
                        onClick={() => {
                          setCurrentSlide(index);
                        }}
                      ></button>
                    );
                  })
                : null}
            </span>
          </div>
        </>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import styles from "@/styles/image-slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Back from "@/components/back";
import sliderData from "@/data/slider-data";
import Image from "next/image";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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
            {sliderData
              ? sliderData.map((slider, index) => {
                  return (
                    <Image
                      key={slider.id}
                      src={"/images/" + slider.image}
                      width={600}
                      height={600}
                      className={
                        currentSlide === index
                          ? styles["current-image"]
                          : `${styles["current-image"]} ${styles["hide-current-image"]}`
                      }
                    />
                  );
                })
              : null}
            {/* {images && images.length
              ? images.map((imageItem, index) => {
                  return (
                    <img
                      key={imageItem.id}
                      src={imageItem.download_url}
                      className={
                        currentSlide === index
                          ? styles["current-image"]
                          : `${styles["current-image"]} ${styles["hide-current-image"]}`
                      }
                    />
                  );
                })
              : null} */}
            <div onClick={handleNext} className={styles["arrow-right"]}>
              <BsArrowRightCircleFill size={20} />
            </div>

            <span className={styles["circle-indicators"]}>
              {sliderData
                ? sliderData.map((slider, index) => {
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
              {/* {images && images.length
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
                : null} */}
            </span>
          </div>
        </>
      )}
    </>
  );
}

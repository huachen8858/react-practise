import React, { useEffect, useState } from "react";
import styles from "@/styles/load-more-data.module.css";
import Back from "@/components/back";
import Image from "next/image";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (ex) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 50) setDisabledButton(true);
  }, [products]);

  return (
    <>
      {loading ? (
        <div>Loading data ...</div>
      ) : (
        <div className={styles["load-more-container"]}>
        <Back />
          <h1>Products</h1>
          <div className={styles["product-container"]}>
            {products && products.length
              ? products.map((item) => {
                  return (
                    <div className={styles["product"]} key={item.id}>
                      <Image src={item.thumbnail} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles["button-container"]}>
            <button
            className={styles['load-more-btn']}
              disabled={disabledButton}
              onClick={() => setCount(count + 1)}
            >
              Load More Products
            </button>
            {disabledButton ? <p>You have reached to 50 products!</p> : null}
          </div>
        </div>
      )}
    </>
  );
}

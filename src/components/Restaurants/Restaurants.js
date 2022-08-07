import React from "react";
import styles from "./styles.css";

const Restaurants = (props) => {
  const { data } = props;

  return (
    <div className={styles.restaurants}>
      {data.map((item, index) => {
        return (
          <div className={styles.restaurant} key={index}>
            <div className={styles.featured}>featured</div>
            <img src={item.url1} alt="" />
            <div className={styles.rDescription}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.time}>
                <i className="fa-solid fa-clock"></i>
                <span>{item.infoText}</span>
              </p>
              <div className={styles.tags}>
                <div className={styles.tag}>
                  <img src={item.url2} alt="" />
                  <span>{item.labelText}</span>
                </div>
              </div>
              <div className={styles.basket}>
                <i className="fa-solid fa-basket-shopping fa-xs"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;

import React from "react";
import styles from "./styles.css";
import img3 from "../images/cake_bg.png";
import img4 from "../images/burger_bg.png";
import img5 from "../images/pizza.png";
import img6 from "../images/burger.png";
import img7 from "../images/meat.png";
import img8 from "../images/sushi.png";
import img9 from "../images/broccoli.png";
import img10 from "../images/cake.png";

import Restaurants from "../Restaurants";


const FoodDeliveryPage = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.discounts}>
            <div>
              <img src={img3} alt="" />
              <div className={styles.description}>
                <p>All deserts</p>
                <p>20% OFF</p>
                <p>Deserty</p>
              </div>
            </div>
            <div>
              <img src={img4} alt="" />
              <div className={styles.description}>
                <p>Big Burgers</p>
                <p>50% OFF</p>
                <p>Foodies</p>
              </div>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.category}>
              <img src={img5} alt="" />
              <p>Pizza</p>
            </div>
            <div className={styles.active && styles.category}>
              <img src={img6} alt="" />
              <p>Burger</p>
            </div>
            <div className={styles.category}>
              <img src={img7} alt="" />
              <p>BBQ</p>
            </div>
            <div className={styles.active && styles.category}>
              <img src={img8} alt="" />
              <p>Sushi</p>
            </div>
            <div className={styles.category}>
              <img src={img9} alt="" />
              <p>Vegan</p>
            </div>
            <div className={styles.category}>
              <img src={img10} alt="" />
              <p>Desserts</p>
            </div>
          </div>
          <h4>Nearby restaurants</h4>
          {/* move this part to another component */}
        </div>
        <div>
          <Restaurants />
        </div>
      </main>
    </>
  );
};

export default FoodDeliveryPage;

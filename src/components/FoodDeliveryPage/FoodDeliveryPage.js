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
import img11 from "../images/restaurant1.png";
import img12 from "../images/restaurant2.png";
import img13 from "../images/restaurant3.png";
import img14 from "../images/restaurant4.png";
import img15 from "../images/restaurant5.png";
import img16 from "../images/restaurant6.png";
import img17 from "../images/pizza_mini.png";
import img18 from "../images/sushi_mini.png";

const data = [
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza",
  },
];

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
          <div className={styles.restaurants}>
            {data.map((item) => {
              return (
                <div className={styles.restaurant}>
                  <div className={styles.featured}>featured</div>
                  <img src={item.url1} alt="" />
                  <div className={styles.rDescription}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.time}>
                      <i class="fa-solid fa-clock"></i>
                      <span>{item.infoText}</span>
                    </p>
                    <div className={styles.tags}>
                      <div className={styles.tag}>
                        <img src={item.url2} alt="" />
                        <span>{item.labelText}</span>
                      </div>
                    </div>
                    <div className={styles.basket}>
                      <i class="fa-solid fa-basket-shopping fa-xs"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodDeliveryPage;

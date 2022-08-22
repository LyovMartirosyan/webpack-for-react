import React from "react";
import styles from "./styles.css";
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
    labelText: "sushi",
    type:["sushi"]
  },
  {
    url1: img12,
    url2: img18,
    title: "Burgers & Pizza",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "Pizza & burger",
    type:["pizza","burger"]
  },
  {
    url1: img13,
    url2: img17,
    title: "Ninja sushi",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "sushi",
    type:["sushi"]
  },
  {
    url1: img12,
    url2: img17,
    title: "Pizzeria",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "pizza",
    type:["pizza"]
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "sushi",
    type:["sushi"]
  },
  {
    url1: img11,
    url2: img17,
    title: "Royal Sushi House",
    infoText: "0-40 min ○ $32 min sum",
    labelText: "sushi",
    type:["sushi"]
  },
];


const Restaurants = (props) => {

  const filteredData =props.selected ? data.filter((item) => item.type.includes(props.selected)) : data
  return (
    <div className={styles.restaurants}>
      {filteredData.map((item, index) => {
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

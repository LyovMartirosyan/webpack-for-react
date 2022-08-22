import React from 'react';
import styles from "./menu.css";
import img1 from "../images/main.svg"
import img2 from "../images/avatar.png"
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <Link to="/">
            <img src={img1} alt="logo" />
            </Link>

            <div>
              <input type="text" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className={styles.rightBox}>
            <ul className={styles.menu}>
              <li>
                <a href="#">Restaurants</a>
              </li>
              <li>
                <a href="#">Deals</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
            </ul>
            <div className={styles.basket}>
              <span>4</span>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
            <div className={styles.avatar}>
              <Link to="/USerProfilePage">
                <img src={img2} alt="" />
              </Link>
            </div>
            <div className={styles.mobileMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
     );
}
 
export default Header;
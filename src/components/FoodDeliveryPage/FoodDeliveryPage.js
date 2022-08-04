import React from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import img1 from "../images/main.svg"
import img2 from "../images/avatar.png"
import img3 from "../images/cake_bg.png"
import img4 from "../images/burger_bg.png"
import img5 from "../images/pizza.png"
import img6 from "../images/burger.png"
import img7 from "../images/meat.png"
import img8 from "../images/sushi.png"
import img9 from "../images/broccoli.png"
import img10 from "../images/cake.png"
import img11 from "../images/restaurant1.png"
import img12 from "../images/restaurant2.png"
import img13 from "../images/restaurant3.png"
import img14 from "../images/restaurant4.png"
import img15 from "../images/restaurant5.png"
import img16 from "../images/restaurant6.png"
import img17 from "../images/pizza_mini.png"
import img18 from "../images/sushi_mini.png"





const FoodDeliveryPage = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <img src={img1} alt="logo" />
            <div>
              <input type="text" placeholder="Search" />
              <i class="fa-solid fa-magnifying-glass"></i>
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
              <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <div className={styles.avatar}>
              <Link to="/USerProfilePage">
                <img src={img2} alt="" />
              </Link>
            </div>
            <div className={styles.mobileMenu}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
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
          <div className={styles.restaurants}>
            <div className={styles.restaurant}>
              <div className={styles.featured}>featured</div>
              <img src={img11} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Royal Sushi House</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img17} alt="" />
                    <span>Pizza</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                </div>
              </div>
            </div>
            <div className={styles.restaurant}>
              <div className={styles.featured}>featured</div>
              <img src={img12} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Burgers & Pizza</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img18} alt="" />
                    <span>Sushi</span>
                  </div>
                  <div className={styles.tag}>
                    <img src={img17} alt="" />
                    <span>Pizza</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className={styles.restaurant}>
              <img src={img13} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Ninja sushi</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img18} alt="" />
                    <span>Sushi</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                </div>
              </div>
            </div>
            <div className={styles.restaurant}>
              <img src={img14} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Ninja sushi</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img18} alt="" />
                    <span>Sushi</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                </div>
              </div>
            </div>
            <div className={styles.restaurant}>
              <img src={img15} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Ninja sushi</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img18} alt="" />
                    <span>Sushi</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                </div>
              </div>
            </div>
            <div className={styles.restaurant}>
              <img src={img16} alt="" />
              <div className={styles.rDescription}>
                <p className={styles.title}>Ninja sushi</p>
                <p className={styles.time}>
                  <i class="fa-solid fa-clock"></i>
                  <span>30-40 min ○ $32 min sum</span>
                </p>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <img src={img18} alt="" />
                    <span>Sushi</span>
                  </div>
                </div>
                <div className={styles.basket}>
                  <i class="fa-solid fa-basket-shopping fa-xs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodDeliveryPage;

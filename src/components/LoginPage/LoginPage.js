import React, { useState } from "react";
import styles from "./styles.css";
import img1 from "../images/main.svg";
import img2 from "../images/1.PNG";
import img3 from "../images/2.PNG";
import img4 from "../images/3.PNG"
import users from "./users.json"

const LoginPage = (props) => {
  const { setIsUserLogedIn } = props

  const [formData, setFormData] = useState({ name: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    const result = users.list.find(({username,password}) => username  === formData.name && password === formData.password);
    if (result) {
      setIsUserLogedIn(true)
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.logoMain}>
            <img src={img1} alt="logo" />
          </div>
          <div className={styles.LoginTitleContainer}>
            <div className={styles.login}>Login</div>
            <div className={styles.signIn}>
              Sign in with your data that you entered during your registration.
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="Email"> Email</label>
              <input
                value={formData.name}
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value });
                }}
                placeholder="name@example.com"
                type="email"
                name="Email"
                id="Email"
                required
              />
            </div>
            <div className={styles.passwordField}>
              <label htmlFor="password">Password</label>
              <input
              value={formData.password}
              onChange={(event) => {
                setFormData({ ...formData, password: event.target.value });
              }}
                placeholder="min. 8 characters"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <i class="fa-solid fa-eye fa-xs"></i>

            <div className={styles.logged}>
              <input
                className={styles.check}
                type="checkbox"
                name="keep me logged in"
              />
              <p className={styles.keepText}>Keep me logged in</p>
            </div>
            <div>
              <button
                type="submit"
                className={styles.button}
                onClick={onSubmit}
              >
                <p className={styles.buttonContent}>Login</p>
              </button>
            </div>
          </form>
          <a href="#" className={styles.forgotPassword}>
            Forgot password
          </a>
          <div className={styles.LoginFooter}>
            <p className={styles.signUpLink}>
              Don’t have an account?{" "}
              <span className={styles.signUp}>
                <a href="#">Sign up</a>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.reviewsBox}>
            <div className={styles.review}>
              <img src={img2} alt="food delivery review" />
              <img src={img3} alt="best item" />
            </div>
            <img
              src={img4}
              alt="add to cart"
              className={styles.addToCard}
            />
          </div>
          <h2>Leave reviews for all meals</h2>
          <h3>
            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
            probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
          </h3>
          <div className={styles.dots}>
            <div className={styles.dot}></div>
            <div className={styles.active}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

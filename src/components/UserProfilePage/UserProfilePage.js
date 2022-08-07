import React from "react";
import styles from "./user.css";

const UserProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h4>Settings</h4>
        <div class="adress active">
          <div className={styles.label}>
            <p>Account</p>
            <p>Personal information</p>
            <i class="fa-solid fa-user-tie"></i>
          </div>
        </div>
        <div className={styles.adress}>
          <div className={styles.label}>
            <p>Adress</p>
            <p>Shipping addresses</p>
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>

        <div className={styles.adress}>
          <div classame={styles.label}>
            <p>Payment method</p>
            <p>Connected credit cards</p>
            <i class="fa-solid fa-credit-card"></i>
          </div>
        </div>

        <div className={styles.adress}>
          <div classame={styles.label}>
            <p>Security</p>
            <p>Password,2FA</p>
            <i class="fa-solid fa-shield"></i>
          </div>
        </div>
      </div>
      <div className={styles.adress}>
        <div classame={styles.label}>
          <p>Payment method</p>
          <p>Connected credit cards</p>
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>
      <div className={styles.adress}>
        <div classame={styles.label}>
          <p>Security</p>
          <p>Password,2FA</p>
          <i class="fa-solid fa-shield"></i>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h4>Account</h4>
        </div>
        <div className={styles.box}>
          <h3>Personal information</h3>
          <p className={styles.av}>Avatar</p>
          <div className={styles.personalAvatar}>
            <img src="./images/avatar.png" alt="" />
            <button className={styles.button}>
              <p className={styles.buttonContent}>Change</p>
            </button>
            <button className={styles.buttonRemove}>
              <p className={styles.buttonRemoveContent}>Remove</p>
            </button>
          </div>
          <div className={styles.info}>
            <label>
              <p>Fisrt name</p>
              <input type="text" placeholder="Jane" />
            </label>
            <label>
              <p>Last name</p>
              <input type="text" placeholder="Robertson" />
            </label>
            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="jane.robertson@example.com"
              />
            </label>
            <label>
              <p>Phone number</p>
              <input type="tel" name="tel" placeholder="(217) 555-0113" />
            </label>
          </div>
          <div className={styles.notif}>
            <h5>Email notifications</h5>
            <div className={styles.checkingBox}>
              <tr>
                <td className={styles.check}></td>
                <td>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="New deals"
                      value="New deals"
                      checked
                    />
                    New deals
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="New restaurants"
                      value="New restaurants"
                      checked
                    />
                    New restaurants
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Order statuses"
                      value="Order statuses"
                      checked
                    />
                    Order statuses
                  </label>
                </td>
                <td>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Password changes"
                      value="Password changes"
                      checked
                    />
                    Password changes
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Special offers"
                      value="Special offers"
                      checked
                    />
                    Special offers
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Newsletter"
                      value="Newsletter"
                      checked
                    />
                    Newsletter
                  </label>
                </td>
              </tr>
            </div>
          </div>

          <div className={styles.but}>
            <div>
              <button>Log out</button>
            </div>
            <div className={styles.changes}>
              <button>Discard changes</button>
              <button>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

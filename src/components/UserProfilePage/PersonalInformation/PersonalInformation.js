import React from "react";
import styles from "./PersonalInformation.css"
import img1 from "../../images/avatar.png"


const PersonalInformation = () => {
    return(
        <div>
            
        <h3>Personal information</h3>
          <p className={styles.av}>Avatar</p>
          <div className={styles.personalAvatar}>
            <img src={img1} alt="" />
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

            {/* es ktory chpetqa stex lini <tr> tagy inqy table -i meja ogagorcvum inqy chi kara
              div -i mej lini */}
            {/* mekel mi qani tex class - a grac petqa lini className dranq */}
           
            <div className={styles.checkingBox}>
              <>
                <div className={styles.check}></div>
                <div>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="New deals"
                      value="New deals"
                      // checked
                    />
                    New deals
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="New restaurants"
                      value="New restaurants"
                      // checked
                    />
                    New restaurants
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Order statuses"
                      value="Order statuses"
                      // checked
                    />
                    Order statuses
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Password changes"
                      value="Password changes"
                      // checked
                    />
                    Password changes
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Special offers"
                      value="Special offers"
                      // checked
                    />
                    Special offers
                  </label>
                  <label>
                    <input
                      className={styles.ch}
                      type="checkbox"
                      name="Newsletter"
                      value="Newsletter"
                      // checked
                    />
                    Newsletter
                  </label>
                </div>
              </>
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
    )
}

export default PersonalInformation
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./user.css";
import PersonalInformation from "./PersonalInformation/PersonalINformation";

const UserProfilePage = () => {

const[selected,setSelected]=useState("personalInformation")

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h4>Settings</h4>
        <button  onClick={() => setSelected("personalInformation")} className={styles.adress}>
          <div className={styles.label}>
            <p>Account</p>
            <p>Personal information</p>
            {/* <i className="fa-solid fa-user-tie"></i> */}
          </div>
        </button>
        <button  onClick={() => setSelected("adress")} className={styles.adress}>
          <div className={styles.label}>
            <p>Adress</p>
            <p>Shipping addresses</p>
            {/* <i className="fa-solid fa-location-dot"></i> */}
          </div>
        </button>

        <button  onClick={() => setSelected("payment")} className={styles.adress}>
          <div className={styles.label}>
            <p>Payment method</p>
            <p>Credit card</p>
            {/* <i className="fa-solid fa-location-dot"></i> */}
          </div>
        </button>

        <button  onClick={() => setSelected("security")} className={styles.adress}>
          <div className={styles.label}>
            <p>Security</p>
            <p>Password 2FA</p>
            {/* <i className="fa-solid fa-location-dot"></i> */}
          </div>
        </button>
      </div>
      
      <div className={styles.rightContainer}>
        <div>
          <h4>Account</h4>
        </div>
        <div className={styles.box}>
         {selected==="personalInformation" ? <PersonalInformation/> : null}
         {selected==="adress" ? <div>Yerevan,Armenia,Lazo street,home 17,0026</div> : null}
         {selected==="payment" ? <div>Visa Card 4578 2251 0019 1245</div> : null}
         {selected==="security" ? <div>Security</div> : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

import React, { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import FoodDeliveryPage from "./FoodDeliveryPage/FoodDeliveryPage";
import { USerProfilePage } from "./UserProfilePage";
import Header from './Header'

import NoMatch from "./NoMatch";

const App = () => {
  const [isUserLogedIn, setIsUserLogedIn] = useState(false)

  return (
    <Router>
      <div>
        {isUserLogedIn ? <Header/> : null}
        <Routes>
          <Route exact path="/" element={<LoginPage setIsUserLogedIn={setIsUserLogedIn}/>} />
          <Route
            exact
            path="/FoodDeliveryPage"
            element={<FoodDeliveryPage />}
          />
          <Route exact path="/USerProfilePage" element={<USerProfilePage />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

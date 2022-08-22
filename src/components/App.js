import React, { useState } from "react";
import { Routes, BrowserRouter as Router, Route,Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import FoodDeliveryPage from "./FoodDeliveryPage/FoodDeliveryPage";
import UserProfilePage from "./UserProfilePage";
import Header from "./Header";


import NoMatch from "./NoMatch";

const App = () => {
  const [isUserLogedIn, setIsUserLogedIn] = useState(true);

  return (
    <Router>
      <div>
        {isUserLogedIn ? <Header /> : null}
        {isUserLogedIn ? (
          <Routes>
            <Route
              exact
              path="/FoodDeliveryPage"
              element={<FoodDeliveryPage />}
            />
            <Route
              exact
              path="/UserProfilePage"
              element={<UserProfilePage />}
            />
            <Route path="*" element={<Navigate to="/FoodDeliveryPage" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={<LoginPage setIsUserLogedIn={setIsUserLogedIn} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import FoodDeliveryPage from "./FoodDeliveryPage/FoodDeliveryPage";
import { USerProfilePage } from "./UserProfilePage";

import NoMatch from "./NoMatch";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
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

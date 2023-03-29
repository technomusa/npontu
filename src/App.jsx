import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Home from "./Screens/Home";
import Kedebah from "./Screens/Kedebah";
import Deywuro from "./Screens/Deywuro";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import PasswordChange from "./Screens/PasswordChange";
import Forgotten from "./Screens/Forgotten";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/kedebah" element={<Kedebah />} />
        <Route exact path="/deywuro" element={<Deywuro />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/forgotten" element={<Forgotten />} />
        <Route exact path="/changePassword" element={<PasswordChange />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

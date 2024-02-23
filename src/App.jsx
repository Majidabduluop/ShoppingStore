import React from "react";
import Main from "./Components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Filterproducts from "./Components/Filterproducts";
import Singlepage from "./Components/Singlepage";
import Navbar from "./Components/Navbar/Navbar";
import CustomizedDialogs from "./Components/CustomizedDialogs";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div className="w-full overflow-hidden ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/filterproducts/:type"
          element={<Filterproducts />}
        ></Route>
        <Route path="/singlepage/:id" element={<Singlepage />}></Route>
        <Route path="/basket/:cartopen" element={<CustomizedDialogs />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

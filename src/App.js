import React from "react";
import MainFooter from "./pages/MainFooter/Footer"
import ProductCategory from "./pages/ProductCategory/productCategory";
import Navbar from "./pages/Navbar/Navbar";


function App() {
  return (
    <div>
        <Navbar/>
        <ProductCategory/>
        <MainFooter/>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar/Navbar" ;
import Home from "./Home/Home";
import Items from "./Items/Items";
import Icons from "./Icons/Icons";
import Banner from "./Banner/Banner";

import Products from "./Products/Products";
import Arrival from "./Arrival/Arrival";
import Footer from "./Footer/Footer";
import Sellingproducts from "./Sellingproducts/Sellingproducts";




function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Items/>
      <Icons/>
      <Sellingproducts/>
      <Banner/>
      <Products/>
      <Arrival/>
      <Footer/>
    
    </div>
  );
}

export default App;

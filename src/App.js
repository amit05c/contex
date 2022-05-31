import React from "react"
import './App.css';
// import {useContext} from "react"
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import { CartProvider } from "./contex/CartContext";
// import { CartContext } from "./contex/CartContext";



function App() {
  // const value= useContext(CartContext)
  // console.log(value)

  return (
    <div className="App">
   <CartProvider>
   {/* {value} */}
   <Navbar/>
     <Body/>
   </CartProvider>
     
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route>404 Not Found!</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  useEffect (() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  }

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/cat/:id" exact={true} element={<Listing/>} />
        <Route path="/product/:id" exact={true} element={<ProductDetails/>} />
      </Routes>
      <Footer/>

      {
        isOpenProductModal === true && <ProductModal/>
      }
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

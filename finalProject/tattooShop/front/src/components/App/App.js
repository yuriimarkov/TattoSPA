import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useQuery} from "@apollo/client";

import {GET_DATA} from '../../data/Data'

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Page404 from "../Pages/Error/404";
import Home from "../Pages/Home/Home";
import Promo from "../Pages/Promo/Promo";
import { BasketPage } from "../Pages/Basket/BasketPage/BasketPage";
import Catalog from '../Pages/Catalog/Catalog';

import loadingGif from './../../assets/images/loading.gif';
import FullCard from '../Cards/FullCard/FullCard';


function App() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    const existingItem = basket.find((item) => item.id === product.id);
  
    if (existingItem) {
      const updatedBasket = basket.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            count: item.count + 1
          }
        }
        return item;
      });
  
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      setBasket(updatedBasket);
    } else {
      const item = {
        ...product,
        count: 1 
      };
      const updatedBasket = [...basket, item];
  
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      setBasket(updatedBasket);
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <img src={loadingGif} alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data.products.data)

  
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home data={data}  addToBasket={addToBasket} />} />
          <Route path='/promo' element={<Promo />} />
          <Route path='/about' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/basket' element={<BasketPage basketItems={basket} />} />
          <Route path='/catalog' element={<Catalog data={data} addToBasket={addToBasket} />} />
          {data?.products.data && data?.products.data.map(item => <Route key={item.id} path={`/category/${item.id}`} element={<FullCard data={item.attributes} />} />)}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
      <Footer  />
    </>
  );
}

export default App;

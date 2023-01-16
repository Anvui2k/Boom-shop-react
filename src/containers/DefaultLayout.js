import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Women from "../pages/Women";
import Children from "../pages/Children";
import Men from "../pages/Men";
import Gioithieu from "../pages/Gioithieu";
import Lienhe from "../pages/Lienhe";
import Baohanh from "../pages/Baohanh";
import Amazon from "../pages/amazon";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";

function DefaultLayout() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() =>{
  //   console.log("cart change");
  // }, [cart]);
  return (
    <>
      <Header setShow={setShow} size={cart.length} />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route
          path="home"
          element={
            show ? (
              <Home handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
        />
        <Route
          path="women"
          element={
            show ? (
              <Women handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
        />
        <Route
          path="children"
          element={
            show ? (
              <Children handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
        />
        <Route
          path="men"
          element={
            show ? (
              <Men handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
        />
        <Route path="gioithieu" element={<Gioithieu />} />
        <Route path="lienhe" element={<Lienhe />} />
        <Route path="baohanh" element={<Baohanh />} />

        <Route
          path="amazon"
          element={
            show ? (
              <Amazon handleClick={handleClick} />
            ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default DefaultLayout;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import Shop from "./routes/shop.jsx";
import Cart from "./routes/cart.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import { dummyCards } from "./lib/dummyCards.js";
import {
  fetchProducts,
  countCartItems,
  cartSubtotal,
  formatPrice,
} from "./lib/utils.js";

export default function Router() {
  const [products, setProducts] = useState(dummyCards);
  const [cart, setCart] = useState(new Map());

  useEffect(() => {
    // TODO - update `products` with fetched data from API
  });

  const incrementCartItemCount = function (productId) {
    setCart((prevCart) => {
      const prevCartItemCount = prevCart.has(productId)
        ? prevCart.get(productId)
        : 0;
      const newCart = new Map(prevCart);
      return newCart.set(productId, prevCartItemCount + 1);
    });
  };

  const decrementCartItemCount = function (productId) {
    setCart((prevCart) => {
      const prevCartItemCount = prevCart.has(productId)
        ? prevCart.get(productId)
        : 0;
      if (prevCartItemCount <= 0) return prevCart;
      const newCart = new Map(prevCart);
      if (prevCartItemCount - 1 === 0) {
        newCart.delete(productId);
        return newCart;
      }
      return newCart.set(productId, prevCartItemCount - 1);
    });
  };

  const setCartItemCount = function (productId, count) {
    if (!Number.isInteger(count) || count < 0) return;
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      if (count === 0) {
        newCart.delete(productId);
        return newCart;
      }
      return newCart.set(productId, count);
    });
  };

  const removeCartItem = function (productId) {
    setCart((prevCart) => {
      if (!prevCart.has(productId)) return prevCart;
      const newCart = new Map(prevCart);
      newCart.delete(productId);
      return newCart;
    });
  };

  const clearCart = function () {
    setCart(new Map());
  };

  const cartItems = function (products, cart) {
    const res = [];
    cart.forEach((value, key, map) => {
      const item = products.find((prod) => prod.id === key);
      if (item) res.push({ ...item, quantity: value });
    });
    return res;
  };

  const rootRouteProps = { products, cart, cartItems };
  const shopRouteProps = { products, incrementCartItemCount };
  const cartRouteProps = {
    products,
    cart,
    incrementCartItemCount,
    decrementCartItemCount,
    setCartItemCount,
    removeCartItem,
    clearCart,
    cartItems,
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root {...rootRouteProps} />}>
          <Route index={true} element={<Shop {...shopRouteProps} />} />
          <Route path="cart" element={<Cart {...cartRouteProps} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

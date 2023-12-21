"use strict";

async function fetchProducts(
  apiUrl = "https://fakestoreapi.com/products?limit=12"
) {
  try {
    const response = await fetch(apiUrl, { mode: "cors" });
    if (!response.ok) throw new Error("Network response was not OK");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
}

function countCartItems(cartItems) {
  const counter = (total, item) => total + item.quantity;
  return cartItems.reduce(counter, 0);
}

function cartSubtotal(cartItems) {
  const counter = (total, item) => total + item.price * item.quantity;
  return cartItems.reduce(counter, 0);
}

function formatPrice(price) {
  return (
    "CAD " +
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(price)
  );
}

export { fetchProducts, countCartItems, cartSubtotal, formatPrice };

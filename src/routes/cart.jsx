/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartSubtotal, formatPrice } from "./../lib/utils.js";
import CartItem from "../components/CartItem.jsx";

export default function Cart({
  products,
  cart,
  incrementCartItemCount,
  decrementCartItemCount,
  setCartItemCount,
  removeCartItem,
  clearCart,
  cartItems,
}) {
  const [cartList, setCartList] = useState(cartItems(products, cart));

  useEffect(() => {
    setCartList(cartItems(products, cart));
  }, [products, cart, cartItems]);

  let subtotal = cartSubtotal(cartList);

  const handleOrderClick = function () {
    alert(
      "Your order will be processed shortly.\nThanks for shopping at STORE!"
    );
    clearCart();
  };

  const extraCartItemProps = {
    incrementCartItemCount,
    decrementCartItemCount,
    setCartItemCount,
    removeCartItem,
  };

  return (
    <div className="max-w-screen-sm w-half">
      <h2 className="text-3xl mb-3">Your Cart</h2>
      <div className="flex flex-col gap-y-6 mb-10">
        {cartList.length > 0 ? (
          <>
            {cartList.map((cartListItem) => (
              <CartItem
                key={cartListItem.id}
                cartItem={cartListItem}
                {...extraCartItemProps}
              />
            ))}
            <div className="flex flex-col items-end">
              <p className="text-xl mb-3">Subtotal: {formatPrice(subtotal)}</p>
              <button
                type="button"
                className="border-black border-2 rounded-lg p-2"
                onClick={handleOrderClick}
              >
                Submit Order
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-3">Your cart is empty.</p>
            <Link
              className="block border-black border-2 rounded-lg p-2 max-w-fit"
              to={`/`}
            >
              Continue Shopping
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

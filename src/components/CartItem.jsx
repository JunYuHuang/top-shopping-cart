/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { formatPrice } from "./../lib/utils.js";

export default function CartItem({
  cartItem,
  incrementCartItemCount,
  decrementCartItemCount,
  setCartItemCount,
  removeCartItem,
}) {
  const { id, title, price, quantity } = cartItem;
  const [quantityDraft, setQuantityDraft] = useState(quantity);

  useEffect(() => {
    setQuantityDraft(quantity);
  }, [quantity]);

  const handleQuantityOnChange = (e) => {
    setQuantityDraft(e.target.value);
  };

  const handleQuantityForm = (e) => {
    e.preventDefault();
    const newQuantity = Number.parseInt(quantityDraft);
    if (!Number.isInteger(newQuantity) || newQuantity < 0) {
      setQuantityDraft(quantity);
      return;
    }
    setCartItemCount(id, newQuantity);
    setQuantityDraft(newQuantity);
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between gap-x-4 mb-2">
        <div className="text-xl text-ellipsis">
          {title} (x {quantity})
        </div>
        <div className="text-xl text-ellipsis text-gray-700 mb-2">
          {formatPrice(price)}
        </div>
      </div>
      <form
        action="post"
        className="flex flex-row items-center gap-x-2"
        onSubmit={handleQuantityForm}
      >
        <div className="flex flex-row gap-x-2 items-center">
          <label htmlFor={`quantity-${id}`} className="">
            Quantity:
          </label>
          <input
            type="number"
            min="0"
            max="9999"
            name={`quantity-${id}`}
            id={`quantity-${id}`}
            className="border-black border-2 rounded-lg p-2 max-w-20 text-ellipsis"
            value={quantityDraft}
            onChange={handleQuantityOnChange}
            required
          />
        </div>
        <button type="submit" className="border-black border-2 rounded-lg p-2">
          Update
        </button>
      </form>
      <div className="flex flex-row items-center gap-x-2 mt-2">
        <button
          type="button"
          role="decrement quantity"
          className="border-black border-2 rounded-lg p-2 min-w-12"
          onClick={() => decrementCartItemCount(id)}
        >
          -
        </button>
        <button
          type="button"
          role="increment quantity"
          className="border-black border-2 rounded-lg p-2 min-w-12"
          onClick={() => incrementCartItemCount(id)}
        >
          +
        </button>
        <button
          type="button"
          className="border-black border-2 rounded-lg p-2"
          onClick={() => removeCartItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

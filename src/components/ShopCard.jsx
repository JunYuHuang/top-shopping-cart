/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatPrice } from "./../lib/utils.js";

export default function ShopCard({ product }) {
  const { id, title, image, price } = product;

  return (
    <div className="shadow-xl p-4 rounded-2xl">
      <div className="h-80 overflow-hidden bg-gray-200 mb-2">
        <img
          src={image}
          alt={title}
          className="object-cover bg-gray-200 w-full h-full"
        />
      </div>
      <div className="text-lg text-ellipsis">{title}</div>
      <div className="text-lg text-ellipsis text-gray-700 mb-2">
        {formatPrice(price)}
      </div>
      <button
        data-product-id={id}
        className="border-black border-2 rounded-lg p-2 w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}

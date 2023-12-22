/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ShopCard from "../components/ShopCard";

export default function Shop({ products, incrementCartItemCount }) {
  const handleAddToCart = function (e) {
    const element = e.target;
    if (!element.dataset.productId) return;
    const productId = Number.parseInt(element.dataset.productId);
    if (Number.isNaN(productId)) return;
    incrementCartItemCount(productId);
  };

  return (
    <>
      <h2 className="text-3xl mb-3">All Products</h2>
      <div
        className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]"
        onClick={handleAddToCart}
      >
        {products.map((product) => (
          <ShopCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

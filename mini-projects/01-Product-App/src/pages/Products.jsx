import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  let [products, setProducts] = useState([]);

  let fetchProducts = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-slate-700 bg-slate-50 min-h-screen">
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Discover Our Collection
        </h1>
        <p className="text-base text-slate-500">
          Handpicked products, curated just for you.
        </p>
      </section>

      <section className="pb-20 px-5 max-w-6xl mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-lg text-slate-400">Fetching products...</h2>
        )}
      </section>
    </div>
  );
}

export default Products;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function HomePage() {
  return (
    <div className="text-gray-600">
      {/* Hero */}
      <section className="text-center py-24 px-5 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Find the best products at the best prices, all in one place.
        </p>
        <button className="bg-indigo-500 text-white px-8 py-3 rounded hover:bg-indigo-600 focus:outline-none">
          Shop Now
        </button>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 px-5 container mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 text-center mb-12">
          Why Shop With Us
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-full sm:w-64 text-center p-6 border rounded">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Fast Delivery</h3>
            <p>Get your orders delivered quickly and reliably.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 border rounded">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Products</h3>
            <p>We only offer products that meet our quality standards.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 border rounded">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Checkout</h3>
            <p>Your payments and data are always protected.</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-5 bg-gray-50">
        <h2 className="text-2xl font-medium text-gray-900 text-center mb-12">
          Featured Categories
        </h2>
        <div className="flex flex-wrap gap-4 justify-center container mx-auto">
          <div className="w-full sm:w-40 text-center py-8 bg-white rounded shadow-sm">
            <h3 className="text-gray-900 font-medium">Electronics</h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 bg-white rounded shadow-sm">
            <h3 className="text-gray-900 font-medium">Fashion</h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 bg-white rounded shadow-sm">
            <h3 className="text-gray-900 font-medium">Home & Living</h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 bg-white rounded shadow-sm">
            <h3 className="text-gray-900 font-medium">Beauty</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-5">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Ready to start shopping?
        </h2>
        <p className="mb-8">Browse our full collection and find something you'll love.</p>
        <button className="bg-indigo-500 text-white px-8 py-3 rounded hover:bg-indigo-600 focus:outline-none">
          View All Products
        </button>
      </section>
    </div>
  );
}

export default HomePage;
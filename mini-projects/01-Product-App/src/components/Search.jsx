import { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-10 flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full max-w-md rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
      />
    </div>
  );
}

export default Search;
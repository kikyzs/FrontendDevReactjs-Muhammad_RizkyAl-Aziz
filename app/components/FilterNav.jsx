"use client";

export default function FilterNav({
  openNow,
  setOpenNow,
  price,
  setPrice,
  search,
  setSearch,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      {/* OPEN NOW TOGGLE */}
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <div
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            openNow ? "bg-blue-900" : "bg-gray-300"
          }`}
          onClick={() => setOpenNow(!openNow)}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              openNow ? "translate-x-6" : ""
            }`}
          />
        </div>
        <span className="text-gray-800 font-medium">Open Now</span>
      </label>

      {/* PRICE SELECT */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors duration-200"
      >
        <option value="">All Prices</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
      </select>

      {/* SEARCH INPUT */}
      <input
        type="text"
        value={search}
        placeholder="Search cuisine..."
        className="border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 w-64 transition-colors duration-200"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

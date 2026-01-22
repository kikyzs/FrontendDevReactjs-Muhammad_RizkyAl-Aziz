"use client";

export default function FilterNav({
  openNow,
  setOpenNow,
  price,
  setPrice,
  onSearch,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      {/* OPEN NOW */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={openNow}
          onChange={() => setOpenNow(!openNow)}
        />
        Open Now
      </label>

      {/* PRICE */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="">All Prices</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
      </select>

      {/* CATEGORY / SEARCH */}
      <input
        type="text"
        placeholder="Search cuisine..."
        className="border rounded px-3 py-1"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
      />
    </div>
  );
}

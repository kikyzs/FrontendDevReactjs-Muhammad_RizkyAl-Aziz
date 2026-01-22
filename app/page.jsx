"use client";

import { useEffect, useState } from "react";
import { getRestaurants } from "./api/restaurantApi";
import FilterNav from "./components/FilterNav";
import RestaurantCard from "./components/RestaurantCard";

export default function Page() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRestaurants(search).then((res) => {
      setRestaurants(res.restaurants);
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-6">
          Restaurant List
        </h1>

        {/* FILTER */}
        <FilterNav search={search} setSearch={setSearch} />

        {/* GRID 4 KOLOM */}
        <section
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {restaurants.map((item) => (
            <RestaurantCard
              key={item.id}
              restaurant={item}
            />
          ))}
        </section>

      </div>
    </main>
  );
}

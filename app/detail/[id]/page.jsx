"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getRestaurantDetail } from "../../api/restaurantApi";
import ReviewCard from "../../components/ReviewCard";

export default function DetailPage() {
  const { id } = useParams(); // ✅ BENAR DI NEXT 15+
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (!id) return;

    getRestaurantDetail(id)
      .then((res) => {
        setRestaurant(res.restaurant);
      })
      .catch(console.error);
  }, [id]);

  if (!restaurant) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-yellow-500 mb-4">⭐ {restaurant.rating}</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurant.customerReviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

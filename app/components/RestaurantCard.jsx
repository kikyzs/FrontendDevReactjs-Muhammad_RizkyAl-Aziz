import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition bg-white">
      <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
        alt={restaurant.name}
        className="w-full h-44 object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-1">
        <p className="text-sm text-gray-500">{restaurant.city}</p>

        <h2 className="font-semibold text-lg">
          {restaurant.name}
        </h2>

        <p className="text-yellow-500 font-medium">
          ⭐ {restaurant.rating}
        </p>

        <p className="text-sm text-gray-600">
          {restaurant.description.slice(0, 80)}...
        </p>

        <Link
          href={`/detail/${restaurant.id}`}
          className="block w-full bg-blue-900 text-white font-bold py-2 text-center hover:bg-blue-800 transition"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

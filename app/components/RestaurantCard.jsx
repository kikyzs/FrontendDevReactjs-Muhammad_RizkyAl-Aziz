import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col rounded-lg overflow-hidden">
      
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-500">{restaurant.city}</p>
          <h2 className="text-lg font-semibold mt-1">{restaurant.name}</h2>
          <p className="text-yellow-500 font-medium mt-1">⭐ {restaurant.rating}</p>
          <p className="text-sm text-gray-600 mt-2">
            {restaurant.description.length > 80
              ? restaurant.description.slice(0, 80) + "..."
              : restaurant.description}
          </p>
        </div>

        {/* Button */}
        <Link href={`/detail/${restaurant.id}`} className="mt-4">
          <button className="w-full py-2 bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
            Learn More →
          </button>
        </Link>
      </div>
    </div>
  );
}

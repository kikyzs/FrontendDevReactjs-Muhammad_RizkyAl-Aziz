const BASE_URL = "https://restaurant-api.dicoding.dev";

export async function getRestaurants(query = "") {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  return res.json();
}

export async function getRestaurantDetail(id) {
  const res = await fetch(`${BASE_URL}/detail/${id}`);
  return res.json();
}

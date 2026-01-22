export default function ReviewCard({ review }) {
  return (
    <div className="border rounded p-4">
      <h4 className="font-semibold">{review.name}</h4>
      <p className="text-gray-600">{review.review}</p>
    </div>
  );
}

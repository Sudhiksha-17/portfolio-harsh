import { useNavigate } from "react-router-dom";

export default function SareeCard({ saree }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-64 bg-silver rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col cursor-pointer"
      onClick={() => navigate(`/saree/${saree.id}`)}
    >
      {/* Image Section */}
      <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={saree.image}
          alt={saree.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between p-4 text-center text-maroon bg-gray-100">
        <h2 className="text-xl font-semibold mb-2 truncate">{saree.name}</h2>
        <p className="text-lg font-medium text-red mb-2">{saree.price}</p>

        <button className="bg-maroon text-silver px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-gold hover:text-black hover:shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
}

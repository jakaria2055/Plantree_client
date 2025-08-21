import { Link } from "react-router-dom";

function PlantsCard({ item }) {
  return (
    <div className="popular-card bg-green-950 w-70 mx-auto p-4 pt-24 rounded-md relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
      />

      <p className="italic">{item.shortDes}</p>
      <h4 className="font-semibold text-xl text-base">{item.title}</h4>

      <div className="text-yellow-500 text-xs py-3 ">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-half-fill"></i>
        <i className="ri-star-line text-gray-400"></i>
        <i className="ri-star-line text-gray-400"></i>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl">${item.price}</p>
        <Link
          to={`/product/${item._id}`}
          className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transform duration-300 px-2 py-1 rounded-sm text-xl"
        >
          <i className="ri-shopping-cart-fill"></i>
        </Link>
      </div>
    </div>
  );
}

export default PlantsCard;

import { Link } from "react-router";
import { Star, Clock, Users, ShoppingCart } from "lucide-react";

import "./Dish.css";
import DishAddToCart from "./DishAddToCart";
import DishContent from "./DishContent";

export default function Dish({ index, dish }) {
  return (
    <Link key={dish.id} to={`/dish/${dish.id}`} className="group">
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-pink-400"
        style={{
          transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
        }}
      >
        <div className="relative h-64 overflow-hidden  rounded-t-3xl">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
            {dish.difficulty}
          </div>

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-sm">{dish.rating}</span>
            <span className="text-xs text-gray-500">({dish.reviewCount})</span>
          </div>

          <DishAddToCart dish={dish} />
        </div>

        <DishContent dish={dish} />
      </div>
    </Link>
  );
}

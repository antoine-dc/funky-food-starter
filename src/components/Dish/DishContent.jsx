import { Clock, Users } from "lucide-react";
import DishTag from "./DishTag";

export default function DishContent({ dish }) {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
        {dish.name}
      </h3>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="size-4" />
          <span>{dish.prepTimeMinutes + dish.cookTimeMinutes} min</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="size-4" />
          <span>{dish.servings} portions</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {dish.tags.map((tag) => (
          <DishTag key={tag} tag={[tag]} />
        ))}
      </div>
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-gray-600">
            {dish.cuisine}
          </span>
          <span className="text-sm text-gray-500">
            {dish.caloriesPerServing} cal
          </span>
        </div>
      </div>
    </div>
  );
}

import { useParams, Link } from "react-router";
// import { dishes } from "../data/dishes";
import {
  ArrowLeft,
  Clock,
  Users,
  Flame,
  Star,
  ChefHat,
  ShoppingCart,
} from "lucide-react";
// import { useCart } from "../contexts/CartContext";
// import { CartButton } from "./CartButton";
import { toast } from "sonner";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";

export function DishDetail() {
  const { id } = useParams();
  const { menuData } = useContext(MainContext);
  const dish = menuData.find((d) => d.id === Number(id));
  //   const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (dish) {
      //   addToCart(dish);
      toast.success(`${dish.name} ajouté au panier ! 🎉`, {
        duration: 2000,
      });
    }
  };

  if (!dish) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black text-white mb-4">Oops! 🤷‍♂️</h1>
          <p className="text-white text-xl mb-8">Ce plat n'existe pas !</p>
          <Link
            to="/"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Retour au Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
      {/* <CartButton /> */}

      {/* Floating Add to Cart Button - Sticky */}
      <button
        onClick={handleAddToCart}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-black py-4 px-8 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 group"
      >
        <ShoppingCart className="size-6 group-hover:rotate-12 transition-transform" />
        <span>Ajouter au panier</span>
      </button>

      {/* Hero Image Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
        >
          <ArrowLeft className="size-5" />
          Retour au Menu
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
            {dish.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <Star className="size-5 fill-black" />
              {dish.rating} ({dish.reviewCount} avis)
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
              {dish.difficulty}
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
              {dish.cuisine}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-3xl text-center transform rotate-1 shadow-lg">
              <Clock className="size-8 mx-auto mb-2 text-purple-700" />
              <div className="font-black text-2xl text-purple-900">
                {dish.prepTimeMinutes}
              </div>
              <div className="text-sm text-purple-700 font-bold">
                Préparation
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-6 rounded-3xl text-center transform -rotate-1 shadow-lg">
              <ChefHat className="size-8 mx-auto mb-2 text-pink-700" />
              <div className="font-black text-2xl text-pink-900">
                {dish.cookTimeMinutes}
              </div>
              <div className="text-sm text-pink-700 font-bold">Cuisson</div>
            </div>

            <div className="bg-gradient-to-br from-orange-200 to-orange-300 p-6 rounded-3xl text-center transform rotate-1 shadow-lg">
              <Users className="size-8 mx-auto mb-2 text-orange-700" />
              <div className="font-black text-2xl text-orange-900">
                {dish.servings}
              </div>
              <div className="text-sm text-orange-700 font-bold">Portions</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 p-6 rounded-3xl text-center transform -rotate-1 shadow-lg">
              <Flame className="size-8 mx-auto mb-2 text-yellow-700" />
              <div className="font-black text-2xl text-yellow-900">
                {dish.caloriesPerServing}
              </div>
              <div className="text-sm text-yellow-700 font-bold">Calories</div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {dish.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg"
                >
                  #{tag}
                </span>
              ))}
              {dish.mealType.map((type) => (
                <span
                  key={type}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-lg"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients & Instructions */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border-4 border-purple-200 transform -rotate-1">
              <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                🛒 Ingrédients
              </h2>
              <ul className="space-y-3">
                {dish.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-md"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-800 pt-1">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl border-4 border-orange-200 transform rotate-1">
              <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                👨‍🍳 Instructions
              </h2>
              <ol className="space-y-4">
                {dish.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="bg-white p-4 rounded-2xl shadow-md"
                  >
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-800 pt-1">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
              <p className="text-3xl font-black text-white mb-4">
                Prêt à cuisiner funky ? 🎉
              </p>
              <Link
                to="/"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
              >
                Découvrir Plus de Plats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

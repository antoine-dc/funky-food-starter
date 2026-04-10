import { Link } from "react-router";
import CTA from "../components/CTA";
import data from "../data/menu.json";
import Dish from "../components/Dish/Dish";
import SearchBar from "../components/SearchBar";
// Demo 3 : Import useState
// Demo 6 : Appel du MainContext
// Démo 9 : Appel de DishSkeleton

export default function Home() {
  // Demo 3 : Ajouter un state searchTerm
  // Demo 4-1 : Ajouter un state menu
  // Demo 4-2 : Créer une fonction handleSearch qui va filtrer les résultats et modifier le searchTerm
  // Demo 6 : Appel du useContext
  // Démo 9 : Component Dish en Lazy loading
  return (
    <>
      <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        Notre Menu Groovy
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
      </p>

      {/* Demo 5 : Appel component SearchBar */}

      {/* Demo 3 : Modif de cette partie SearchBar  */}
      {/* <>
        <div className="flex justify-between flex-wrap mb-4">
          <input
            type="text"
            placeholder="Cherche ton prochain repas"
            className="bg-gray-100 rounded-full w-96 p-2 px-6"
            //   Demo 3 : TODO onKeyDown et onChange
          />
        </div>
        <p className="text-gray-600 mb-12 px-6">
           Demo 3 : Afficher le terme de recherche 
        </p>
      </> */}

      {/* Démo 9 : Ajout de Suspense et DishSkeleton*/}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Demo 4 : modif de data */}
        {data.map((dishData, index) => (
          <Dish key={index} index={index} dish={dishData} />
        ))}
      </section>

      <CTA
        message="Curieux de notre philosophie ? 🎉"
        link="/about"
        label="À propos de nous"
      />
    </>
  );
}

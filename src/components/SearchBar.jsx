// Demo 3 : Importer useState
// Demo 6 : Appel du MainContext

export default function SearchBar() {
  // Demo 3 : Créer un useState searchTerms
  // Demo 6 : Appel du useContext
  // Démo 8 : Créer une useTransition

  /* Fonction handleSearch */
  // Demo 5 : Création fonction handleSearch

  return (
    <>
      <div className="flex justify-between flex-wrap mb-4">
        <input
          type="text"
          placeholder="Cherche ton prochain repas"
          className="bg-gray-100 rounded-full w-96 p-2 px-6"
          //   Demo 3 : TODO onKeyDown et onChange
        />
      </div>
      <p className="text-gray-600 mb-12 px-6">
        {/* Demo 3 : Afficher le terme de recherche */}
      </p>

      {/* Demo 8 : Afficher un message selon isPending */}
    </>
  );
}

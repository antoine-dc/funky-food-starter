import React, { useContext, useState, useTransition } from "react";
import { MainContext } from "../context/MainContext";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRecipes } = useContext(MainContext);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());

    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
      searchRecipes(e.target.value.toLowerCase());
    });
  };
  return (
    <>
      <div className="flex justify-between flex-wrap mb-4">
        <input
          type="text"
          placeholder="Cherche ton prochain repas"
          className="bg-gray-100 rounded-full w-96 p-2 px-6"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
          onChange={(e) => {
            if (e.target.value.length >= 3 || e.target.value.length === 0) {
              handleSearch(e);
            }
          }}
        />
      </div>
      <p className="text-gray-600 mb-12 px-6">
        {"Votre recherche : " + searchTerm}
      </p>
      <p className="text-gray-600 mb-12 px-6">
        {isPending && "Recherche en cours..."}
      </p>
    </>
  );
}

export default SearchBar;

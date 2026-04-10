import { createContext, useEffect, useState, useTransition } from "react";
import { getRecipes, getRecipesSearch } from "../services/recipesService";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const [menuData, setMenuData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getRecipes().then((recipes) => {
        setMenuData(recipes);
      });
    });
  }, []);

  const searchRecipes = (terms) => {
    getRecipesSearch(terms).then((recipes) => {
      setMenuData(recipes);
    });
  };

  return (
    <MainContext.Provider
      value={{ menuData, setMenuData, searchRecipes, isPending }}
    >
      {children}
    </MainContext.Provider>
  );
}

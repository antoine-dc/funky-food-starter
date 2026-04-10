const API_URL = "https://dummyjson.com/recipes";

export async function getRecipes() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  } finally {
    console.log("Fetch attempt completed");
  }
}

export async function getRecipesSearch(terms) {
  try {
    const response = await fetch(`${API_URL}/search?q=${terms}`);
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  } finally {
    console.log("Fetch attempt completed");
  }
}

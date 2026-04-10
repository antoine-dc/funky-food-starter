import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  test: {
    // Démo 11 :
    // globals: true, // Permet d'utiliser les fonctions globales de Vitest
    // Démo 12 :
    // environment: "jsdom", // Utilise l'environnement de test jsdom pour simuler un navigateur
    // setupFiles: "./__tests__/setupTests.js", // Fichier de configuration pour les tests
    // Démo 13 :
    // coverage: {
    //   include: ["src/**/*.{js,ts,jsx,tsx}"],
    //   exclude: ["src/**/*.spec.{js,ts}"],
    //   enabled: true, // Active la collecte de couverture de code pour Vitest UI
    // },
  },
});

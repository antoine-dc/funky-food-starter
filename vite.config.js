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
    globals: true, // Permet d'utiliser les fonctions globales de Vitest
    environment: "jsdom", // Utilise l'environnement de test jsdom pour simuler un navigateur
    setupFiles: "./__tests__/setupTests.js", // Fichier de configuration pour les tests
    coverage: {
      include: ["**/*.{js,ts,jsx,tsx}"],
      exclude: ["src/**/*.spec.{js,ts}"],
      enabled: true, // Active la collecte de couverture de code pour Vitest UI
    },
  },
});

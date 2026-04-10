import { Link } from "react-router";
import CTA from "../components/CTA";

export default function ErrorPage() {
  return (
    <>
      <CTA
        message="Erreur 404 - Page non trouvée"
        link="/"
        label="Retour à l'accueil"
      />
    </>
  );
}

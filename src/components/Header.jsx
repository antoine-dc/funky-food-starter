import { Link } from "react-router";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1620395458832-6436796c2d4c")',
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <Link to="/">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 transform -rotate-2 drop-shadow-2xl">
              🍕 FUNKY FOOD ! 🌮
            </h1>
          </Link>
          <p className="text-xl md:text-2xl text-yellow-300 font-bold transform rotate-1">
            Où la saveur rencontre l'ambiance !
          </p>
        </div>
      </div>

      {/* Vague décorative en bas de l'en-tête */}
      <div className="relative -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </header>
  );
}

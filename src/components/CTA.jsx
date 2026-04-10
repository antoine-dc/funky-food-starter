import { Link } from "react-router";

export default function CTA({ message, link, label }) {
  return (
    <div className="mt-12 text-center">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
        <p className="text-3xl font-black text-white mb-4">{message}</p>
        <Link
          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
          to={link}
          data-discover="true"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}

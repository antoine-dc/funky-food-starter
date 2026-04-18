import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { CartContext } from "../../context/CartContext";

export function CartButton() {
  const { totalItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 transform hover:-rotate-6"
      >
        <div className="relative">
          <ShoppingCart className="size-6" />
          {totalItems > 0 && (
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-black rounded-full size-7 flex items-center justify-center font-black text-sm border-2 border-white animate-bounce">
              {totalItems}
            </div>
          )}
        </div>
      </button>

      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

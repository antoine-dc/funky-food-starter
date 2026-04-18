import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function CartDrawer({ isOpen, onClose }) {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems } =
    useContext(CartContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-black flex items-center gap-2">
                  <ShoppingBag className="size-8" />
                  Mon Panier
                </h2>
                <button
                  onClick={onClose}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all hover:rotate-90 duration-300"
                >
                  <X className="size-6" />
                </button>
              </div>
              <p className="text-white/90 font-bold">
                {totalItems} {totalItems > 1 ? "articles" : "article"}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="size-24 text-gray-300 mb-4" />
                  <h3 className="text-2xl font-black text-gray-800 mb-2">
                    Votre panier est vide
                  </h3>
                  <p className="text-gray-600">
                    Ajoutez des plats délicieux pour commencer !
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.dish.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-pink-200"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <img
                          src={item.dish.image}
                          alt={item.dish.name}
                          className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-lg"
                        />

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="font-black text-gray-800 mb-1 line-clamp-1">
                            {item.dish.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.dish.caloriesPerServing} cal/portion
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-md">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.dish.id,
                                    item.quantity - 1,
                                  )
                                }
                                className="hover:bg-purple-100 rounded-full p-1 transition-colors"
                              >
                                <Minus className="size-4 text-purple-600" />
                              </button>
                              <span className="font-black text-gray-800 min-w-[1.5rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.dish.id,
                                    item.quantity + 1,
                                  )
                                }
                                className="hover:bg-purple-100 rounded-full p-1 transition-colors"
                              >
                                <Plus className="size-4 text-purple-600" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.dish.id)}
                              className="ml-auto bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-2 transition-colors"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
                <button
                  onClick={clearCart}
                  className="w-full mb-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors"
                >
                  Vider le panier
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-black py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                  Commander maintenant 🎉
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

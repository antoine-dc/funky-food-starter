import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "sonner";
import { MainProvider } from "./context/MainContext";
import { CartProvider } from "./context/CartContext";

function Layout() {
  return (
    <MainProvider>
      <div className="min-h-screen">
        <Header />
        <main className="bg-white px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <CartProvider>
              <Outlet />
            </CartProvider>
          </div>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </MainProvider>
  );
}

export default Layout;

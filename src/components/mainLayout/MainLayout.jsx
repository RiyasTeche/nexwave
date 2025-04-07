import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
  //   const pathName = useLocation().pathname.toUpperCase();
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

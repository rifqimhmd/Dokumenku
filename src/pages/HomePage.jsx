import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Product from "../Components/Product";
import About from "../Components/About";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Product />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

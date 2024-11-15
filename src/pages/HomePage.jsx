import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

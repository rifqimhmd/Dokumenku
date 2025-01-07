import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Product from "../Components/Product";

function HomePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Product />
      </div>
    </>
  );
}
export default HomePage;

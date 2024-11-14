import Navbar from "../Components/Navbar";
import CoverLetter from "../Components/CoverLetter";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="overflow-x-hidden  min-h-screen">
        <Navbar />
        <CoverLetter />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

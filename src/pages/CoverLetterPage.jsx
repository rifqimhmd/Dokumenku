import Navbar from "../Components/Navbar";
import CoverLetter from "../Components/CoverLetter";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <CoverLetter />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

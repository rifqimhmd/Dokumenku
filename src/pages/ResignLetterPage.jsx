import Navbar from "../Components/Navbar";
import ResignLetter from "../Components/ResignLetter";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ResignLetter />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;

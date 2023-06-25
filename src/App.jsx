import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Landing />
      <Gallery />
      <Footer />
      <button className="bg-accent hover:bg-accentdim hover:shadow-lg text-white rounded-full text-lg text-center px-7 md:px-10 py-3 md:py-5 font-secondary fixed bottom-5 right-5 transition-colors">
        book photoshoot
      </button>
    </>
  );
}

export default App;

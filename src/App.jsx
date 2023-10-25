import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#fffccc]">
        <Hero />
        <Offers />
        <Demo />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;

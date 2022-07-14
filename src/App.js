import Cards from "./components/Cards";
import Header from "./components/Header";
import Higherfeat from "./components/Higherfeat";
import Navbar from "./components/Navbar";
import Skillstopic from "./components/Skillstopic";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skillstopic />
      <Cards />
      <Higherfeat />
      <Location />
      <Footer />
    </div>
  );
}

export default App;

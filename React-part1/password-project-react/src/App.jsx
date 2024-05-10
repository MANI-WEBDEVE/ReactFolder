import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="  bg-green-200 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;

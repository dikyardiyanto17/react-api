import "./App.css";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <HomeCards />
        <HomeCards />
        <HomeCards />
      </div>
    </>
  );
}

export default App;

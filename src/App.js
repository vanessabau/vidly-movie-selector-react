import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Movies />
      </main>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path={routes.home} element={<Home />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

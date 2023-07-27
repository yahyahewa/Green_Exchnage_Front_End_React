import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Fotter/Fotter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

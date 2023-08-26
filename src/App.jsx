
import "./index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css'
// Components
import Router from "./pages/Router/Router";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
  return (
     <SkeletonTheme baseColor="#ebe8e8" highlightColor="#ded9d9">
    <div className="">
      {/* <Navbar/> */}
      <Router />
      {/* <Fotter/> */}
    </div></SkeletonTheme>
  );
}

export default App;

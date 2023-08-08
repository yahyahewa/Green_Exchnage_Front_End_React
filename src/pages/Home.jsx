import Banner from "../components/FilterAndSearch/Banner";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Fotter from "../components/Fotter/Fotter"
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Fotter/>
    </>
  );
}

export default Home;

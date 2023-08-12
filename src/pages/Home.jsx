import Banner from "../components/FilterAndSearch/Banner";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import SingleItem from "./SingleItem";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <SingleItem />
    </>
  );
}

export default Home;

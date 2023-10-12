import Hero from '../components/Home/Hero';
import SliderComponent from '../components/Home/SliderComponent';
import Blogs from '../components/Home/Blogs';
import GetStart from '../components/Home/GetStart';
import About from '../components/Home/About';
const Home = () => {
  return (
    <div>
      <Hero />
      <SliderComponent />
      <GetStart />
      <Blogs />
      <About />
    </div>
  );
};

export default Home;

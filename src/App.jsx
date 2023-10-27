import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Router from './pages/Router/Router';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <SkeletonTheme baseColor="#ebe8e8" highlightColor="#1d905130">
      <div className="min-h-screen">
        <Router />
      </div>
    </SkeletonTheme>
  );
}

export default App;

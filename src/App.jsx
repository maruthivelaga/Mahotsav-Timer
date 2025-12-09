import Preloader from './components/Preloader';
import Timer from './components/Timer';
import './App.css';
import bgImage from './bg.avif';
import mahotsavImage from './mahotsav.avif';
import flowerImage from './flower.avif';
import vignanLogoImage from './vignan-logo.avif';

function App() {
  return (
    <>
      <Preloader />
      <div className="main-container">
        <div className="background" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="gold" style={{ backgroundImage: `url(${mahotsavImage})` }}></div>
        <div className="flower" style={{ backgroundImage: `url(${flowerImage})` }}></div>
        <div className="vignan-logo" style={{ backgroundImage: `url(${vignanLogoImage})` }}></div>
        <Timer />
      </div>
    </>
  );
}

export default App;

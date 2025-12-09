import Preloader from './components/Preloader';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <>
      <Preloader />
      <div className="main-container">
        <div className="background"></div>
        <div className="gold"></div>
        <div className="flower"></div>
        <div className="vignan-logo"></div>
        <Timer />
      </div>
    </>
  );
}

export default App;

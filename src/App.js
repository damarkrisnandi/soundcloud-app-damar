
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <div>
      <Header />
      
      <iframe id="sc" width="100%" height={`${ window.screen.height * 0.5 }`} scrolling="no" frameBorder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }">
      </iframe>

      <Player />
    </div>
  );
}

export default App;

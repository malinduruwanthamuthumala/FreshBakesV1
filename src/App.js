import logo from './logo.svg';
import './App.css';
import Header from './components/Layouts/Header';
import LandingPage from './pages/landingPage';
import Movies from './components/Movie/Movies';
function App() {
  return (
    <div className="App">
      <Movies></Movies>
      {/* <LandingPage></LandingPage> */}
    </div>
  );
}


export default App;

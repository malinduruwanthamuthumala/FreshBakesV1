import logo from './logo.svg';
import './App.css';
import Header from './components/Layouts/Header';
import LandingPage from './pages/landingPage';
import Movies from './components/Movie/Movies';
import Increment from './components/Increment';

function App() {
  return (
    <div className="App">
      {/* <Movies></Movies> */}
      {/* <LandingPage></LandingPage> */}
      <Increment></Increment>
    </div>
  );
}


export default App;

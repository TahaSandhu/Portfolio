import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Introduction/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Work from './Components/Works/Work';
import Portfolio from './Components/Portfolio/Portfolio'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Work/>
    <Portfolio/>
    </div>
  );
}

export default App;

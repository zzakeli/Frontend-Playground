import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Artists from './Artists'

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar/>
      {/* HEADER*/}
      <Header/>
      {/* ABOUT*/}
      <About/>
      {/* ARTISTS*/}
      <Artists/>
      {/* HITS */}
    </div>
  );
}

export default App;

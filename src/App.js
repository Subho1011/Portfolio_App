
import './App.css';
import Navbar from './components/Navbar';
import BringToTop from './components/BringToTop';
import PreLoader from './components/PreLoader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div>
      <PreLoader />
      <div>
        <Navbar />
        <BringToTop />
        <div>
          <Home />
          <About />
          <Projects />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;

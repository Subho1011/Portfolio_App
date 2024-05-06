import {useEffect, useState} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import BringToTop from './components/BringToTop';
import PreLoader from './components/PreLoader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => { clearTimeout(timer)};
  }, []);

  return (
    <div>
      <PreLoader isLoading={load}/>
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
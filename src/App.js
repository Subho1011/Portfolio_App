
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import './App.css';
import NavBar from './components/Navbar';
import BringToTop from './components/BringToTop';
import PreLoader from './components/PreLoader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => { clearTimeout(timer) };
  }, []);

  return (
    <Router>
      <PreLoader isLoading={load} />
      <div>
        <NavBar />
        <BringToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
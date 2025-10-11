import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Bloggish from './components/Bloggish/Bloggish';

const App = () => {
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bloggish" element={<Bloggish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

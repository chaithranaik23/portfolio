import {Routes, Route, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/Home.js';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Education from '../src/components/Education.js';
import Contact from '../src/components/Contact.js';

function App() {
  return (
    <div className="Navbar">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
        
        {/* <About/>
        <Skills/> */}
    </div>
  );
}

export default App;

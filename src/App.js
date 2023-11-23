import {Routes, Route, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Skills from '../src/components/Skills.js';
// import Card from '../src/components/Card.js';
import Education from '../src/components/Education.js';
import Cirtificates from '../src/components/Cirtificates.js';
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
          <Route path='/cirtificate' element={<Cirtificates/>}/>
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='/card' element={<Card/>}/> */}
      </Routes>
      </BrowserRouter>
        
        {/* <About/>
        <Skills/> */}
    </div>
  );
}

export default App;

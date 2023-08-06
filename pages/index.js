
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    <About />
    <Skills/>
    <Projects/>
    <Contact />
   
    </>
  );
}


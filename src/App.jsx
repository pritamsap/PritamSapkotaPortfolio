import './App.css';
import Navbar from './components/NavBar'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  
  return (
    <BrowserRouter>
      <main className='App'> 
        <Navbar />         
        <Aboutme />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  )
    
}

export default App;

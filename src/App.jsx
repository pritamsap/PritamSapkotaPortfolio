import './App.css';
import Navbar from './components/NavBar'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  
  return (
    <HashRouter>
      <main className='App'> 
        <Navbar />         
        <Aboutme />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </HashRouter>
  )
    
}

export default App;

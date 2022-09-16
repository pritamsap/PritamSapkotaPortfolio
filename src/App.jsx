import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {



  return (
    <main className='App'> 
      <Navbar />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
    
}

export default App;

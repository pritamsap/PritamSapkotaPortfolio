import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {



  return (
    <main className='App'> 
      <Navbar />
      <Aboutme />
      <Projects />å
      <Skills />
      <Contact />
    </main>
  )
    
}

export default App;

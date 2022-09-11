import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';

function App() {



  return (
    <main className='App'> 
      <Navbar />
      <Aboutme />
      <Projects />
    </main>
  )
    
}

export default App;

import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <About />
          <Experience />
          <Education />
          <Skills />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
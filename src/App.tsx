import './App.css';
import Cards from './components/Cards/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <section className="bg-[#fcf5eb] h-screen flex justify-center items-center flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Cards />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;

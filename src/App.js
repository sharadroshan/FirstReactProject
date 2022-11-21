import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppBar from './component/Appbar/Index';
import Home from './component/Home/Index';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

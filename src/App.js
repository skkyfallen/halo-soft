import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing.jsx';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact component={<Landing/>}/>
      </Routes>
      <Landing/>
    </div>
    </Router>
  );
}

export default App;

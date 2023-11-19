import Home from './home.js';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Linechart from './chart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element= {<Home/>}/>
           <Route path="/chart" element= {<Linechart/>}/>
        </Routes>
      </Router>
     {/* <Home/>
     <Linechart/> */}
    </div>
  );
}

export default App;

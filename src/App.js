import Header from './components/Header'
import './App.css';
import Attendance from './components/Attendance';
import  {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Lesson from './components/Lesson.js';
import Scanner from './components/Scanner.js';
function App() {
  return (
    <>
    <div className="App">
    <Router>
    
    <Header/>
    <Routes>
    < Route  path ="/" exact element={<Lesson/>}/>
    
    < Route path="/Attendance" exact  element={<Attendance/>}/>
    < Route path="/Scanner" exact  element={<Scanner/>}/>
    </Routes>
    
  
    </Router>
    </div>
    
    </>
  );
}

export default App;

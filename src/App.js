import './App.css';
import Dashboard from './components/Dashboard'
import {Link,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'

function App() {
  return (
   <div>
     <Link  to="/Dashboard"><button id="Btn">Dashboard</button> </Link>
      <Link  to="/Signup"> <button id="Btn1">Signup</button></Link>
      
      <Routes>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
   </div>
  );
}

export default App;

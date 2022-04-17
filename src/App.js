import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/checkout" element={
         <RequireAuth>
           <CheckOut/>
         </RequireAuth>
       }></Route>
       <Route path="/signup" element={<Signup/> }></Route>
       <Route path="/login" element={<Login/> }></Route>
     </Routes>
    </div>
  );
}

export default App;

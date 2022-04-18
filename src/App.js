import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/checkout/:name" element={
         <RequireAuth>
           <CheckOut/>
         </RequireAuth>
       }></Route>
       <Route path="/welcome" element={<Welcome/> }></Route>
       <Route path="/blogs" element={<Blogs/> }></Route>
       <Route path="/signup" element={<Signup/> }></Route>
       <Route path="/login" element={<Login/> }></Route>
       <Route path="*" element={<NotFound/> }></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

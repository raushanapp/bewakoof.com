import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Home/Navbar';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home/Home';
import {Men} from './components/Home/Men'
import { Women } from './components/Home/Women';
import { MobileCover } from './components/Home/MobileCover';
import { Login } from './components/Home/Login';
import { Wishlist } from './components/Home/Wishlist';
import { Cart } from './components/Home/Cart';
// import { Cart } from './components/cart/Cart';
// import { Test } from './components/Test';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* <Route><Home/></Route> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home/men' element={<Men/>}></Route>
        <Route path='/Home/women' element={<Women/>}></Route>
        <Route path='/Home/mobilecovers' element={<MobileCover/>}></Route>
        <Route path='/Home/login' element={<Login/>}></Route>
        <Route path='/Home/wishlist' element={<Wishlist/>}></Route>
        <Route path='/Home/cart' element={<Cart/>}></Route>
     
        
      </Routes>
    
    </div>
  );
}

export default App;

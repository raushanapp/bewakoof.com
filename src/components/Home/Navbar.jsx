import "./Navbar.css"
import {Link} from "react-router-dom"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
export const Navbar=()=>{
    return <>

    <div  className="Nav">

    
    <ul className="Navleft">
    
       {/* <img src="https://images.bewakoof.com/web/bewakoof-logo-white-1648550013.png" alt="bewakoof_logo" style="height: 18px; margin: 16px 0px; width: 132px;"> */}
        <Link className="no" to="/" ><img src="https://images.bewakoof.com/web/bewakoof-logo-white-1648550013.png" alt="bewakoof-logo" /></Link> 
       <Link className="no" to="/Home/men">Men</Link>
       <Link className="no" to="/Home/women">Women</Link>
       <Link className="no" to="/Home/mobilecovers">Mobilecover</Link>
       
    </ul>

    <div className="Navright">
       {/* <Link to={"./"}>offers</Link> */}
       <div className="alignself">
       <span className="icon"><SearchIcon /></span>
       <input className="searchbox" type="text" placeholder="Enter search"/>
       </div>
       <Link className="no" to="/Home/login">Login</Link>
       <Link className="no" to="/Home/wishlist"><FavoriteIcon color="primary" fontSize="large"/></Link>
       <Link className="no" to="./Home/cart"><ShoppingBagIcon color="primary" fontSize="large"/></Link>
      
       
    </div>
    </div>
    </>
}
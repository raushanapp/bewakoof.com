import "./Navbar.css"
import {Link} from "react-router-dom"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
export const Navbar=()=>{
    return <>

    <div  className="Nav">

    
    <ul className="Navleft">
       {/* <Link to={"./"}>offers</Link> */}
       {/* <img src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-flat.png" alt="images" /> */}
      
        <Link className="no" to="/" >Home</Link> 
       <Link className="no" to="/Home/men">Men</Link>
       <Link className="no" to="/Home/women">Women</Link>
       <Link className="no" to="/Home/mobilecovers">Mobilecover</Link>
       
    </ul>

    <div className="Navright">
       {/* <Link to={"./"}>offers</Link> */}
       <div className="alignself">
       <span><SearchIcon /></span>
       <input type="text" placeholder="Enter search"/>
       </div>
       <Link className="no" to="/Home/login">Login</Link>
       <Link className="no" to="/Home/wishlist"><FavoriteIcon color="primary" fontSize="large"/></Link>
       <Link className="no" to="./Home/cart"><ShoppingBagIcon color="primary" fontSize="large"/></Link>
      
       
    </div>
    </div>
    </>
}
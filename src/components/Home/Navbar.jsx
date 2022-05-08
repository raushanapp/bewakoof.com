import "./Navbar.css";
import { Link } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DropdownMobile } from "./DropdownMobile";
import { DropdownMen } from "./DropdownMen";
import { DropdownWomen } from "./DropdownWomen";
export const Navbar = () => {
  const [menHovering, setMenHovering] = useState(false);
  const [mobileHovering, setMobileHovering] = useState(false);
  const [womenHovering, setWomenHovering] = useState(false);
  return (
    <>
      <div className="Nav">
        <ul className="Navleft">
          <li>
            <Link className="no" to="/">
              <img
                src="https://user-images.githubusercontent.com/91020498/166910862-1cf541b0-a9a1-4223-8456-d20c1f8a4af3.png"
                alt="bewakoof-logo"
              />
            </Link>
          </li>

          <li
            onMouseEnter={() => setMenHovering(true)}
            onMouseLeave={() => setMenHovering(false)}
          >
            <Link className="no" to="/Home/men">
              {" "}
              Men
            </Link>

            {menHovering && <DropdownMen />}
          </li>

          <li
            onMouseEnter={() => setWomenHovering(true)}
            onMouseLeave={() => setWomenHovering(false)}
          >
            <Link className="no" to="/Home/women">
              Women
            </Link>
            {womenHovering && <DropdownWomen />}
          </li>

          <li
            onMouseEnter={() => setMobileHovering(true)}
            onMouseLeave={() => setMobileHovering(false)}
          >
            <Link className="no" to="/Home/mobilecovers">
              Mobilecover
            </Link>
            {mobileHovering && <DropdownMobile />}
          </li>
        </ul>

        <div className="Navright">
          {/* <Link to={"./"}>offers</Link> */}
          <div className="alignself">
            <span className="icon">
              <SearchIcon />
            </span>
            <input
              className="searchbox"
              type="text"
              placeholder="search by product, category or collection"
            />
          </div>
          <Link className="no" to="/Home/login">
            Login
          </Link>
          <Link className="no" to="/Home/wishlist">
            <FavoriteIcon className="icon-navbar" fontSize="large" />
          </Link>
          <Link className="no" to="./Cart/cart">
            <ShoppingBagIcon  className="icon-navbar"  fontSize="large" />
          </Link>
        </div>
      </div>
    </>
  );
};

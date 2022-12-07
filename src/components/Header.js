import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

const Header = () => {
   const [{ basket, user }] = useStateValue(); // here basket is destructured out of multiple objects in state. [state, dispatch] and to change the state we need disptach, but now no need for disptach.

   const login = () => {
      auth.signOut();
   };

   return (
      <>
         <nav className="header">
            {/* logo on the left side */}
            <Link to="/">
               <img
                  className="header__logo"
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt=""
               />
            </Link>

            {/* search box */}
            <div className="header__search">
               <input type="text" className="header__searchInput" />
               <SearchIcon className="header__searchIcon" />
            </div>

            {/* Three links */}
            <div className="header__nav">
               {/* 1st link */}
               <Link to={!user && "/login"} className="header__link">
                  <div onClick={login} className="header__option">
                     <span className="header__optionLineOne">
                        Hello {user && user.email}
                     </span>
                     <span className="header__optionLineTwo">
                        {user ? "Sign Out" : "Sign In"}
                     </span>
                  </div>
               </Link>

               {/* 2nd link */}
               <Link to="/" className="header__link">
                  <div className="header__option">
                     <span className="header__optionLineOne">Returns</span>
                     <span className="header__optionLineTwo">& Orders</span>
                  </div>
               </Link>
               {/* 3rd link */}
               <Link to="/" className="header__link">
                  <div className="header__option">
                     <span className="header__optionLineOne">Your</span>
                     <span className="header__optionLineTwo">Prime</span>
                  </div>
               </Link>

               {/* 4th link */}
               <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                     {/* shopping basket icon */}
                     <ShoppingBasket />

                     {/* number of items in basket */}
                     <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                     </span>
                  </div>
               </Link>
            </div>
         </nav>
      </>
   );
};

export default Header;

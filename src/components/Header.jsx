import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { TbUserCircle } from "react-icons/tb";
import { RiUsbLine } from "react-icons/ri";
import { useState } from "react";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <>
      <header className="max-padd-container w-full mb-2">
        <div className="flexBetween py-3">
          {/* LOGO */}
          <Link to={"/"} className="flex flex-1 bold-28">
            Shoppear
          </Link>

          {/* NAVBAR */}
          <div className="flex-1">
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-8 fixed top-16 right-16 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                  : "hidden xl:flex gap-x-5 xl:gap-x-7 medium-15 bg-primary ring-1 ring-slate-900/5 rounded-full p-2"
              }`}
            />
          </div>

          {/* BUTTONS */}
          <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
            {/* MENU TOGGLE */}
            <>
              {menuOpened ? (
                <FaBarsStaggered className="xl:hidden cursor-pointer text-xl" onClick={toggleMenu}/>
              ) : (
                <FaBars className="xl:hidden cursor-pointer text-xl" onClick={toggleMenu}/>
              )}
            </>

            {/* CART */}
            <Link>
              <div>Cart</div>
            </Link>
            {/* USER PROFILE */}
            <button>Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

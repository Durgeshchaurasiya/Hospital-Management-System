import React, { useContext, useState } from "react";
import logo from "../assets/assets_frontend/logo.svg";
import crossIcon from "../assets/assets_frontend/cross_icon.png";
import menuIcon from "../assets/assets_frontend/menu_icon.svg";
import dropdown from "../assets/assets_frontend/dropdown_icon.svg";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const {token, setToken, userData} = useContext(AppContext)

  // function for logout
  const logout = () => {
    setToken(false);
    localStorage.removeItem('token')
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive
        ? "relative after:block after:h-0.5 after:w-3/5 after:bg-[#5f6FFF] after:mx-auto"
        : ""}>
          <li className="py-1">Home</li>
        </NavLink>
        
        <NavLink to="/doctors" className={({ isActive }) => isActive
        ? "relative after:block after:h-0.5 after:w-3/5 after:bg-[#5f6FFF] after:mx-auto"
        : ""}>
          <li className="py-1">All Doctors</li>  
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive
        ? "relative after:block after:h-0.5 after:w-3/5 after:bg-[#5f6FFF] after:mx-auto"
        : ""}>
          <li className="py-1">About</li>  
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive
        ? "relative after:block after:h-0.5 after:w-3/5 after:bg-[#5f6FFF] after:mx-auto"
        : ""}>
          <li className="py-1">Contact</li>  
        </NavLink>
        <a href="https://merry-meringue-3fa322.netlify.app/" target="_blank" className=" w-25 h-10 flex justify-center items-center pb-1  border border-blue-400 text-lg font-medium rounded-full hover:scale-105 hover:bg-[#5f6FFF] hover:text-white transition-all duration-200 cursor-pointer">Admin</a>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={dropdown} alt="" />
            {/* --------------profile dropdown-------------------- */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-appointments")}
                >
                  My Appointment
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
            // create account button
          <button
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}>
            Create Account
          </button>
        )}

        <img src={menuIcon} alt="" className="w-6 md:hidden" onClick={()=>setShowMenu(true)}/>
        {/* -----------mobile menu----------- */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img src={logo} className="w-36"/>
            <img src={crossIcon} onClick={()=>setShowMenu(false)} className="w-7"/>
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="px-4 py-2 rounded inline-block active:bg-[#5f6FFF] active:text-white" onClick={()=>setShowMenu(false)} to='/'>Home</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={()=>setShowMenu(false)} to='/doctors'>All Doctors</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={()=>setShowMenu(false)} to='/about'>About</NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={()=>setShowMenu(false)} to='/contact'>Contact Us</NavLink>
            <a href="https://merry-meringue-3fa322.netlify.app/" target="_blank" className="px-4 py-2 rounded inline-block ">Admin</a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { IoList, IoLogOutSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/manage-users" },
    { name: "Reviews", path: "/review-page" },
    { name: "Add College", path: "/add-college-data" },
    { name: "Reported Content", path: "/reported-content" }
  ];

  return (
    <div className="w-full p-5 px-6 bg-white text-black flex items-center shadow relative z-10">
      {/* Logo */}
      
      <h1 className="text-3xl font-semibold font-future">InfoDox</h1>
      <span className="text-sm ml-2">Admin</span>

      {/* Desktop Menu */}
      <div className="sm:flex hidden ml-auto gap-7 text-md items-center">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={index} to={item.path}>
              <h1
                className={`${isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"} transition-all duration-300 cursor-pointer`}
              >
                {item.name}
              </h1>
            </Link>
          );
        })}

        <div className="bg-black flex items-center gap-2 text-white px-5 py-1 rounded cursor-pointer">
          <IoLogOutSharp size={23} />
          <button>Logout</button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden ml-auto cursor-pointer">
        <IoList size={30} onClick={() => setNavbarOpen(!navbarOpen)} />
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full z-0 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-5 sm:hidden"
          >
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setNavbarOpen(false)} // close after click
                >
                  <h1
                    className={`${isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"} transition-all duration-300 cursor-pointer`}
                  >
                    {item.name}
                  </h1>
                </Link>
              );
            })}

            <div className="bg-black flex items-center gap-2 text-white px-5 py-2 rounded cursor-pointer">
              <IoLogOutSharp size={23} />
              <button>Logout</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

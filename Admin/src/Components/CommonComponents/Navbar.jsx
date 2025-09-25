import React from 'react';
import { IoLogOutSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); // current URL path

    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Users", path: "/manage-users" },
        { name: "Reviews", path: "/review-page" },
        { name: "Add College", path: "/add-college-data" },
        { name: "Reported Content", path: "/reported-content" }
    ];

    return (
        <div className='w-full p-5 px-15 bg-white text-black flex items-center shadow justify-center sm:justify-start gap-2 '>
            <h1 className='text-3xl font-semibold font-future'>InfoDox</h1>
            <span className='text-sm'>Admin</span>

            <div className='sm:flex hidden ml-auto gap-7 text-md items-center'>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        <h1
                            className={`text-gray-400 hover:text-black transition-all duration-300 cursor-pointer`}
                        >
                            {item.name}
                        </h1>
                    </Link>
                ))}

                <div className='bg-black flex items-center gap-2 text-white px-5 py-1 rounded'>
                    <IoLogOutSharp size={23} />
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

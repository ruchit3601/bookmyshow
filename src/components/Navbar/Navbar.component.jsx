import React from "react";
import { BiChevronRight, BiSearch,BiMenu,BiChevronDown } from "react-icons/bi";

const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
        <div >
            <h3 className="text-2xl font-bold">It All Starts Here!</h3>
            <span className="text-gray-300 text-xs flex items-center"> 
                Ahmedabad <BiChevronRight />
            </span>
        </div>
        <div className="w-6 h-6 text-gray-200">
            <BiSearch className="w-full h-full"/>
        </div>
        </div>
        </>
    );
};
const NavMd = () => {
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input type="search " 
            className="w-full focus:outline-none border-none  bg-transparent" 
            placeholder="Search for Movies, Events, Plays, Sports and Activities."/>
        </div>
    );
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img 
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                        alt="logo"
                        className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input type="search " 
                        className="w-full focus:outline-none border-none  bg-transparent" 
                        placeholder="Search for Movies, Events, Plays, Sports and Activities."/>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-200 hover:text-white cursor-pointer text-xs flex items-center">
                            Ahmedabad <BiChevronDown />
                        </span>
                        <button 
                        className="bg-signin-300 rounded px-2 py-1 text-white text-sm ">sign in
                        </button>
                        <div className="w-8 h-8 text-white">
                            <BiMenu className="w-full h-full"/>
                        </div>
                    </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return(
        <>
            <nav className="bg-gray-800 p-2">
                <div className="md:hidden">{/* mobile devices*/ }
                <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden ">{/* medium devices*/ }
                <NavMd />
                </div>
                <div className="hidden lg:flex">{/* large devices*/ }
                <NavLg /></div>
            </nav>  
        </>
    );
};

export default Navbar;
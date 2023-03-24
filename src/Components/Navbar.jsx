import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, y: 0, duration: 2, ease: "easeIn" },
  closed: { opacity: 0, y: "-300%", duration: 2, ease: "easeOut" },
};

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full h-[8vh] bg-white fixed z-50">
      <div className="flex justify-between items-center w-full h-full px-2 text-black relative">
        <span className="animate-bounce text-xl font-bold">Icon?</span>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="">
          {isOpen ? (
            <GrClose className="p-2 text-4xl" />
          ) : (
            <GiHamburgerMenu className="p-2 text-4xl" />
          )}
        </button>
        <motion.ul
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="absolute w-full flex flex-col  top-[7.9vh] left-0 shadow-md bg-white text-black z-50"
        >
          <Link
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            to="/"
            className="py-2 flex justify-center hover:bg-black hover:text-white"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            to="/food-menu"
            className="py-2 flex justify-center hover:bg-black hover:text-white"
          >
            Food Menu
          </Link>
          <Link
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            to="/drinks-menu"
            className="py-2 flex justify-center hover:bg-black hover:text-white"
          >
            Drinks Menu
          </Link>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;

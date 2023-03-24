import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className={`w-full h-screen pt-[8vh] flex flex-col`}>
      <div className="max-w-fit h-[42vh] flex flex-col mx-auto">
        <h1 className="font-lobster text-6xl mt-16 ">Smokey house</h1>
        <p className="flex justify-end w-full text-lg font-edu">
          Grill & Chill
        </p>
        <h2 className="text-2xl font-Bebas block mx-auto my-16">Menu's</h2>
      </div>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="w-full grid grid-cols-1 h-[50vh]"
      >
        <Link
          to="/food-menu"
          className="w-full h-full bg-food bg-contain flex items-center justify-end pt-20 pr-4 text-5xl text-white font-Bebas hover:opacity-60"
        >
          Food
        </Link>
        <Link
          to="/drinks-menu"
          className="w-full h-full bg-drinks bg-contain flex items-center justify-end pt-20 pr-4 text-5xl text-white font-Bebas hover:opacity-60"
        >
          Drinks
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;

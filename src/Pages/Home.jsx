import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className={`w-full h-screen pt-[8vh] flex flex-col`}>
      <div className="max-w-fit h-2/5 flex flex-col mx-auto">
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
        className="w-full h-3/5 px-2 flex flex-col items-center justify-around md:flex-row"
      >
        <Link
          to="/food-menu"
          className="w-4/5 md:w-1/4 h-[25vh] md:h-[40vh] border-l border-b rounded-md shadow-md flex flex-col hover:opacity-60 transition ease-in-out"
        >
          <img
            src="./food.PNG"
            alt=""
            className="rounded-tr-md rounded-tl-md w-full h-3/4"
          />
          <span className="w-full flex justify-end font-Bebas text-xl pr-4">
            Food menu
          </span>
        </Link>
        <Link
          to="/drinks-menu"
          className="w-4/5 md:w-1/4 h-[25vh] md:h-[40vh] border-l border-b rounded-md shadow-md flex flex-col hover:opacity-60 transition ease-in-out"
        >
          <img
            src="./drinks.PNG"
            alt=""
            className="rounded-tr-md rounded-tl-md w-full h-3/4"
          />
          <span className="w-full flex justify-end font-Bebas text-xl pr-4">
            Drinks menu
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;

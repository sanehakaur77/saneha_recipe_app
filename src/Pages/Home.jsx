import React from "react";
import { ChefHat, Download } from "lucide-react";
import Middlesection from "./Middlesection";
import BottomSection from "./BottomSection";
const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-[url('/recipe.jpg')] bg-cover bg-center 
                      rounded-2xl shadow-lg flex items-center 
                      p-4 md:p-6 m-4 md:m-10"
      >
        <div className="w-full p-5 md:w-1/2">
          <h1 className="font-bold leading-tight">
            <span className="block text-5xl sm:text-4xl md:text-5xl">
              Adventure of
            </span>
            <span className="block text-4xl text-yellow-400 sm:text-5xl md:text-6xl">
              Recipes
            </span>
          </h1>

          {/* 
            CHANGE 4:
            - Responsive paragraph text
          */}
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            perspiciatis exercitationem tempora similique tempore necessitatibus
            ullam nobis iure dolorum saepe.
          </p>

          {/* 
            CHANGE 5:
            - Stack buttons on mobile
            - Row layout on desktop
          */}
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <button className="flex items-center justify-center px-4 py-2 text-white bg-black shadow-md rounded-xl">
              Explore Recipes
              <span className="flex items-center justify-center w-6 h-6 ml-2 bg-white rounded-full">
                <ChefHat className="text-black" size={15} />
              </span>
            </button>

            <button className="flex items-center justify-center px-4 py-2 text-gray-400 bg-white shadow-md rounded-xl">
              Get our App
              <span className="flex items-center justify-center w-6 h-6 ml-2 bg-gray-100 rounded-full">
                <Download className="text-black" size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Middlesection />
      <BottomSection />
    </>
  );
};

export default Home;

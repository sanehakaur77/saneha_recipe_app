import React from "react";
import { User, Heart, Volleyball } from "lucide-react";

const BottomSection = () => {
  const cards = [
    {
      heading: "User-Centered",
      icons: <User size={20} />,
      text: "Our platform is designed with users in mind, making it easy to explore, save, and share recipes that fit your taste and lifestyle.",
    },
    {
      heading: "Diverse Recipes",
      icons: <Volleyball size={20} />,
      text: "Discover a wide variety of recipes from different cuisines, cultures, and dietary preferences, all in one place.",
    },
    {
      heading: "Fun Community",
      icons: <Heart size={20} />,
      text: "Join a friendly community where food lovers connect, exchange ideas, and inspire each other through cooking experiences.",
    },
  ];

  return (
    <>
      {/* ---------- Heading Section ---------- */}
      <div className="flex flex-col items-center justify-center px-4 mt-20">
        {/* Main heading */}
        <h1 className="max-w-3xl text-3xl font-bold text-center md:text-5xl">
          Become a best <span className="text-yellow-400">Chef</span> with our
          Recipes
        </h1>

        {/* Sub text */}
        <p className="max-w-xl mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vero!
        </p>
      </div>

      {/* ---------- Cards Section ---------- */}
      <div className="grid grid-cols-1 gap-6 px-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col p-6 transition shadow-md bg-amber-500 rounded-xl hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 mb-4 bg-white rounded-full">
              {card.icons}
            </div>

            {/* Card heading */}
            <h1 className="mb-2 text-xl font-bold">{card.heading}</h1>

            {/* Card text */}
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BottomSection;

import React from "react";
import { User, Heart, Volleyball } from "lucide-react";

const Middlesection = () => {
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
      {/* 
        Grid instead of flex:
        - 1 column on mobile
        - 2 columns on medium screens (md)
        - 3 columns on large screens (lg)
      */}
      <div className="grid w-full grid-cols-1 gap-6 px-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col p-6 transition bg-gray-100 shadow-md  rounded-xl hover:shadow-xl"
          >
            {/* Icon circle */}
            <div className="flex items-center justify-center w-10 h-10 mb-4 bg-white rounded-full">
              {card.icons}
            </div>

            {/* Heading */}
            <h1 className="mb-2 text-xl font-bold">{card.heading}</h1>

            {/* Description */}
            <p className="text-sm text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Middlesection;

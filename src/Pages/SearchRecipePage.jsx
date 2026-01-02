import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const SearchRecipePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    if (!search.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await res.json();
      setMeals(data.meals || []);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 mt-20 bg-gray-100">
      {/* Logo */}
      <h1 className="mb-4 text-xl font-bold text-center">
        <span>FLA</span>
        <span className="text-yellow-400">VORIZ</span>
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchMeals()}
          className="w-64 px-4 py-2 border rounded-bl-3xl rounded-tl-3xl"
        />
        <button
          onClick={fetchMeals}
          className="flex items-center px-5 text-white bg-gray-400 hover:bg-black rounded-br-3xl rounded-tr-3xl"
        >
          <Search size={18} />
        </button>
      </div>

      {loading && <p className="font-medium text-center">Loading...</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading && meals.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No meals found
          </p>
        )}

        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="transition bg-white rounded-lg shadow hover:shadow-lg"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="object-cover w-full h-48 rounded-t-lg"
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
              <p className="mb-3 text-sm text-gray-500">{meal.strCategory}</p>

              <button
                className="flex items-center gap-1 px-4 py-2 mx-auto text-sm text-white transition bg-black hover:bg-gray-800 rounded-3xl"
                onClick={() => navigate(`/recipe/${meal.idMeal}`)}
              >
                See Recipe
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipePage;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // 🔊 Speech States
  const [speech, setSpeech] = useState(null);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    if (!id) return;

    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals[0]);
          setMainImage(data.meals[0].strMealThumb);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  // ▶ Play
  const playSpeech = () => {
    if (!meal?.strInstructions) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(meal.strInstructions);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.pitch = 1;

    setSpeech(utterance);
    window.speechSynthesis.speak(utterance);
  };

  // ⏸ Pause
  const pauseSpeech = () => {
    window.speechSynthesis.pause();
  };

  // ▶ Resume
  const resumeSpeech = () => {
    window.speechSynthesis.resume();
  };

  // ⏹ Stop
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  if (!meal) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="min-h-screen px-4 py-10 mt-10 bg-gray-50 sm:px-6 md:px-10">
      <h1 className="mb-10 text-3xl font-bold text-center text-gray-800 sm:text-4xl">
        {meal.strMeal}
      </h1>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        {/* LEFT SIDE – Images */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={mainImage}
            alt={meal.strMeal}
            className="object-cover w-full max-w-md shadow-xl rounded-2xl"
          />

          {/* Thumbnails + Back Button */}
          <div className="flex flex-col w-full gap-4">
            <button
              onClick={() => navigate("/search-recipe")}
              className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 w-fit"
            >
              <ChevronLeft size={18} />
              Back
            </button>

            <div className="flex gap-3 py-2 overflow-x-auto">
              {[1, 2, 3].map((_, index) => (
                <img
                  key={index}
                  src={meal.strMealThumb}
                  alt="thumbnail"
                  onClick={() => setMainImage(meal.strMealThumb)}
                  className={`w-24 h-24 flex-shrink-0 object-cover cursor-pointer rounded-xl border-2 transition
                    ${
                      mainImage === meal.strMealThumb
                        ? "border-black scale-105"
                        : "border-gray-300 hover:scale-105"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Recipe Info */}
        <div className="flex flex-col p-6 sm:p-8 bg-white shadow-xl rounded-2xl max-h-[520px] overflow-y-auto">
          <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {meal.strCategory}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Area:</span>{" "}
              {meal.strArea}
            </p>
          </div>

          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Instructions
          </h2>

          <p className="leading-relaxed text-gray-700 whitespace-pre-line">
            {meal.strInstructions}
          </p>

          {/* 🔊 Speech Controls */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={playSpeech}
                className="px-4 py-2 text-white bg-black rounded-lg"
              >
                ▶ Play
              </button>

              <button
                onClick={pauseSpeech}
                className="px-4 py-2 text-white bg-gray-600 rounded-lg"
              >
                ⏸ Pause
              </button>

              <button
                onClick={resumeSpeech}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg"
              >
                ▶ Resume
              </button>

              <button
                onClick={stopSpeech}
                className="px-4 py-2 text-white bg-red-600 rounded-lg"
              >
                ⏹ Stop
              </button>
            </div>

            {/* Speed Controller */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Speed: {rate}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

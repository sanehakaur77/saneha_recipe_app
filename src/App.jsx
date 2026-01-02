import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchRecipePage from "./Pages/SearchRecipePage";
import { ChefHat, Download } from "lucide-react";
import Home from "./Pages/Home";
import Middlesection from "./Pages/Middlesection";
import BottomSection from "./Pages/BottomSection";
import Footer from "./components/Footer";
import RecipeDetails from "./Pages/RecipeDetails";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/search-recipe" element={<SearchRecipePage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

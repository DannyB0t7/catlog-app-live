import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import FavoriteContextProvider from "./favoritesContext/FavoriteContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex min-h-screen relative">
      <SideBar />
      <FavoriteContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Routes>
      </FavoriteContextProvider>
    </div>
  );
}

export default App;

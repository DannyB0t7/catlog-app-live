import React, { useContext } from "react";
import { FavoriteContext } from "../favoritesContext/FavoriteContext";
import CatCard from "../components/CatCard";

function FavoritesPage() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="flex-1 p-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 h-full">
        <h2 className="text-2xl font-semibold">Favorites</h2>
        <div className="h-full">
          {favorites.length === 0 && (
            <div className="h-full grid place-items-center">
              <div>
                <h2 className="text-center font-medium">
                  No favorites to display… add some!
                </h2>
                <img src="view-adorable-3d-cat.png" alt="no favorites" />
              </div>
            </div>
          )}

          {favorites.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {favorites.map((cat) => (
                <CatCard image={cat.image} key={cat.id} id={cat.id} favorites />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;

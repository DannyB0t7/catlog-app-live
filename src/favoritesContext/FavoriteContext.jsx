import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favorites: [],
  onAddFav: () => {},
  onRemoveFav: () => {},
});

const FavoriteContextProvider = function ({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addTofavHandler = function (image, id) {
    const exsistingItem = favorites.some((e) => {
      return e.id === id;
    });

    if (exsistingItem) {
      return;
    }

    setFavorites((prevImages) => [
      ...prevImages,
      {
        id,
        image,
      },
    ]);
  };

  const removeFromFavHandler = function (id) {
    const updatedItems = favorites.filter((imageObj) => {
      if (imageObj.id !== id) return imageObj;
    });
    setFavorites(updatedItems);
  };

  const favCtx = {
    favorites,
    onAddFav: addTofavHandler,
    onRemoveFav: removeFromFavHandler,
  };

  return (
    <FavoriteContext.Provider value={favCtx}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

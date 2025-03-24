import React, { useContext, useState } from "react";
import { FavoriteContext } from "../favoritesContext/FavoriteContext";
import { Heart } from "lucide-react";

function CatCard({ image, id, favorites }) {
  const [hover, setHover] = useState(false);
  const { onAddFav, onRemoveFav } = useContext(FavoriteContext);

  const mouseOverHandler = function () {
    setHover(true);
  };

  const mouseOutHandler = function () {
    setHover(false);
  };

  const favoritesHandler = function () {
    if (favorites) {
      onRemoveFav(id);
    } else {
      onAddFav(image, id);
    }
  };

  let cssClass =
    "text-white absolute top-3 right-3 hover:fill-red-500 hover:cursor-pointer";

  if (favorites) {
    cssClass = "text-white absolute top-3 right-3 fill-red-500 hover:cursor-pointer";
  }

  return (
    <div
      className="p-2 shadow-md rounded-md bg-slate-100 relative"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div className="overflow-hidden rounded-md relative h-60">
        <div className="skeleton absolute inset-0 rounded-md" />
        <img
          src={image}
          alt="cat image"
          className="h-full w-full object-cover object-center opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
      </div>

      {hover && (
        <div className="absolute inset-0 bg-[#00000080] z-10 rounded-md">
          <Heart size={24} className={cssClass} onClick={favoritesHandler} />
        </div>
      )}
    </div>
  );
}

export default CatCard;

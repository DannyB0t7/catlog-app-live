import React from "react";
import { House, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
}

export default SideBar;

const DesktopSideBar = function () {
  return (
    <div
      className="w-44 hidden
     sm:block bg-slate-100 p-5"
    >
      <h1 className="font-bold text-3xl text-center mt-10">CatLog</h1>
      <Link to={"/"}>
        <div className="flex gap-3 justify-start items-center mt-20">
          <House size={24} />
          <h2 className="font-medium">Homepage</h2>
        </div>
      </Link>
      <Link to={"/favorites"}>
        <div className="flex gap-3 justify-start items-center mt-10">
          <Heart size={24} />
          <h2 className="font-medium">Favorites</h2>
        </div>
      </Link>
    </div>
  );
};

const MobileSideBar = function () {
  return (
    <div className="z-10 absolute bottom-0 left-0 right-0 sm:hidden m-h-10 shadow-md bg-slate-100 py-2 px-5">
      <div className="flex gap-10 justify-center h-full items-center">
        <Link to={"/"}>
          <div className="p-2">
            <House size={24} />
          </div>
        </Link>
        <Link to={"/favorites"}>
          <div className="p-2">
            <Heart size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import CatCard from "../components/CatCard";
import BreedCard from "../components/BreedCard";

function HomePage() {
  const [catData, setCatData] = useState([]);
  const [breedInfo, setBreedInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBreedLoading, setIsBreedLoading] = useState(false);
  const [breed, setBreed] = useState([]);
  const [selectedBreed, setSeletedBreed] = useState("abys");

  async function fetchCatApi(breed) {
    setIsLoading(true);
    try {
      const [resCatData, resBreedData] = await Promise.all([
        fetch(
          `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breed}`
        ),
        fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&api_key=${
            import.meta.env.VITE_APP_KEY
          }`
        ),
      ]);

      const [catData, breedData] = await Promise.all([
        resCatData.json(),
        resBreedData.json(),
      ]);

      setCatData(catData);
      setBreedInfo(breedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchCatApiBreed() {
    setIsBreedLoading(true);
    try {
      const res = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await res.json();
      setBreed(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsBreedLoading(false);
    }
  }

  useEffect(() => {
    fetchCatApiBreed();
  }, []);

  useEffect(() => {
    fetchCatApi(selectedBreed);
  }, [selectedBreed]);

  const selectedBreedHandler = function (breed) {
    setSeletedBreed(breed);
  };

  return (
    <div className="flex-1 p-5">
      <div className="max-w-5xl mx-auto">
        {/* dropdown start*/}
        <div className="dropdown">
          <div className="btn m-1 bg-slate-100" role="button" tabIndex={0}>
            List Of Cat Breeds
          </div>
          <ul
            className="dropdown-content bg-base-100 rounded-md z-[11] w-52 p-2 shadow h-screen overflow-y-scroll scrollbar"
            tabIndex={0}
          >
            {isBreedLoading &&
              [...Array(10)].map((_, index) => (
                <div className="p-2" key={index}>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))}

            {!isBreedLoading &&
              breed.length > 0 &&
              breed.map((breed) => (
                <li
                  key={breed.id}
                  className="p-1 text-sm hover:bg-slate-100 rounded-md"
                  onClick={() => selectedBreedHandler(breed.id)}
                >
                  <a>{breed.name}</a>
                </li>
              ))}
          </ul>
        </div>
        {/* dropdown end */}

        <div className="mt-10">
          {isLoading && (
            <div className="flex flex-col gap-4">
              <div className="skeleton h-52 w-52 rounded-full"></div>
              <div className="flex gap-1">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-16"></div>
                <div className="skeleton h-4 w-14"></div>
              </div>
              <div className="skeleton h-16 w-full"></div>
              <div className="skeleton h-4 w-16"></div>
            </div>
          )}

          {!isLoading && breed.length > 0 && (
            <div>
              {...breed.map((breed) => {
                if (breed.id === selectedBreed)
                  return (
                    <BreedCard
                      breed={breed}
                      breedInfo={breedInfo}
                      isLoading={isLoading}
                    />
                  );
              })}
            </div>
          )}
        </div>

        {catData && (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {isLoading &&
              [...Array(10)].map((_, index) => (
                <div className="p-2" key={index}>
                  <div className="skeleton h-60 w-50"></div>
                </div>
              ))}

            {/* {api fetch success} */}
            {!isLoading &&
              catData.map((cat) => (
                <CatCard image={cat.url} key={cat.id} id={cat.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;

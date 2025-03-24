import { ExternalLink } from "lucide-react";

function BreedCard({ isLoading, breedInfo }) {
  const currBreed = breedInfo.length > 0 && breedInfo[0].breeds[0];
  const imageUrl = breedInfo.length > 0 && breedInfo[0].url;

  return (
    <div>
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

      {!isLoading && (
        <div>
          <div className="h-52 w-52 rounded-full relative overflow-hidden">
            <div className="skeleton absolute inset-0 " />
            <img
              src={imageUrl}
              alt="cat-image"
              className="h-full w-full object-cover object-center opacity-0 transition-opacity duration-1000"
              onLoad={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.previousElementSibling.style.display = "none";
              }}
            />
          </div>
          <div className="flex gap-1 items-center mt-5">
            <h2 className="font-medium">{currBreed.name}</h2>
            <p className="font-medium text-slate-600 text-sm">
              ({currBreed.origin})
            </p>
            <p className="text-sm">{currBreed.id}</p>
          </div>

          <p className="mt-2">{currBreed.description}</p>

          <div className="mt-2">
            <a
              href={currBreed.wikipedia_url}
              target="_blank"
              className="text-slate-900 font-medium flex gap-2 items-center"
            >
              <p>WIKIPEDIA</p>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BreedCard;

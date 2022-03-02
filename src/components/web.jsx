import React from "react";
import Rating from "./rating";
import TrendingNow from "./trendingNow";
const WebView = ({ movie, trendingNow }) => {
  return (
    <div className="  hidden lg:flex">
      <div className="w-2/5 desk-left flex items-center justify-center">
        <div className=" text-white bg-red-00 w-4/5">
          <div className="font-bold text-4xl ">{movie.title}</div>
          <div className="font-semibold tracking-wider my-2">
            Season {movie.season}
          </div>
          <div className="flex">
            <Rating value={3} />
          </div>
          <div className="my-3">{movie.genres}</div>
          <div className="">{movie.summary}</div>
          <div className="my-8 bg-red-00 w-full flex justify-between max-w-sm">
            <button className="play-now rounded h-12 w-40 text-center text-sm font-semibold ">
              Play Now
            </button>
            <button className="border-2 h-12 w-40 border-white rounded text-center text-sm font-semibold">
              Download
            </button>
          </div>
          {/* Trading Now */}
          <div className="-ml-2">
            <div className="ml-2">Trending Now</div>
            <TrendingNow data={trendingNow} />
          </div>
        </div>
      </div>
      <div className="w-3/5">
        <div className="bg-red-00 shad-desk w-3/5 h-screen absolute"></div>
        <img
          className="w-full h-screen"
          alt="desk-img"
          src={movie.posterSource}
        />
      </div>
    </div>
  );
};

export default WebView;

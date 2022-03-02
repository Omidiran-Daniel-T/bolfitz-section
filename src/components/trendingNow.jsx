import React from "react";
const TrendingNow = ({ data }) => {
  const newData = data.slice(0, 5); //gets the 1st 5 movies in trending array

  return (
    <div className="bg-red-00 py-5 flex">
      {newData.map((d) => (
        <div className="bg-white h-20 w-16 rounded-lg mx-2" key={d.title}>
          <img className="w-full h-full" alt="t-img-1" src={d.imageSource} />
        </div>
      ))}
    </div>
  );
};

export default TrendingNow;

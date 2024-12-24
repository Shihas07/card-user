import React from "react";

export default function Card({ data }) {
  console.log("datafrom card", data);
  return (
    <>
      {data.map((item, ind) => (
        <div key={ind} className="w-1/3 h-60 flex  bg-white shadow-2xl rounded-3xl">
          <div className="w-1/2 h-full flex justify-center items-center  bg-gray-200">
            <div className="m-5">
              <img className="rounded-2xl" src={item.picture.large} alt={`Profile ${ind}`} />
            </div>
          </div>
          <div className="w-2/3 h-full flex flex-col justify-center p-5 ">
            <div className="mb-3">
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold text-gray-800">Name:</h1>
                <p className="text-lg text-gray-600">{item.name.first}</p>
              </div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold text-gray-800">Last Name:</h1>
                <p className="text-lg text-gray-600">{item.name.last}</p>
              </div>
            </div>
            <div className="mb-2">
              <h1 className="text-lg font-bold text-gray-800">Gender:</h1>
              <p className="text-lg text-gray-600">{item.gender}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Phone Number:</h1>
              <p className="text-lg text-gray-600">{item.cell}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

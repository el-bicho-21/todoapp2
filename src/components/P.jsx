import React, { useState } from "react";

export default function P() {
  const [number, setNumber] = useState(5);
  return (
    <div
      className="flex flex-col justify-center 
         content-center h-[100vh]"
    >
      <div className="h-20">
        <p
          className="text-2xl text-white 
              text-center"
        >
          {number}
        </p>
      </div>
      <div className="text-center">
        <button
          className="rounded-lg
               bg-red-400 p-2 py-1 text-white"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          ADD
        </button>

        <button
          className="rounded-lg
               bg-red-400 p-2 py-1 text-white"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          subtact
        </button>
      </div>
    </div>
  );
}

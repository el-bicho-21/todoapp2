import React from "react";

export default function SerchBox() {
  return (
    <div className="py-[20px]">
      <div
        className="flex justify-center
         border w-[300px] mx-auto py-1 px-2
           bg-white rounded-lg border-gray-400">
        <input
          type="text"
          placeholder="enter activity"
          className="outline-none flex-1"
        />
        <button className="bg-blue-400">

        </button>
      </div>
    </div>
  );
}

import React from "react";
import Todo2 from "./todo2.jsx";

export default function MyComponents() {
  const Todo = ["wash cloth", "buy food", "buy cloth"];

  return (
    <div
      className="flex flex-col gap-2 rounded-19  p-14
     text-red-600 font-solid"
    >
      {" "}
      {Todo.map((item) => (
        <Todo2 papa={item} />
      ))}
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";


export default function Home() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos)
  return(
    <>
    </>
  )
}

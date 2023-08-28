import { useSelector } from "react-redux";

export default function Home() {
  const todos = useSelector((state) => state.todos);
  console.log(todos)
  return(
    <>
      hello {todos}
    </>
  )
}
import React from "react";
import TodoList from "@/components/todoList";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList/>
        </div>
    );
};
export default Home;
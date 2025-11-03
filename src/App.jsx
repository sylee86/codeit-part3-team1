import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useSearchParams } from "react-router-dom";
import "./assets/reset.css";
import "react-toastify/dist/ReactToastify.css";

const storageTodo = JSON.parse(window.localStorage.getItem("todo"));
function App() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [todoList, setTodoList] = useState(storageTodo || {});
  const [todoId, setTodoId] = useState();
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="wrap">
      <Outlet context={{ mode, todoList, setTodoList, setTodoId, todoId }} />
      <ToastContainer />
    </div>
  );
}

export default App;

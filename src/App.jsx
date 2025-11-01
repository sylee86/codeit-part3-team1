import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "@/pages/ListPage/ListPage";
import CreatePage from "@/pages/CreatePage/CreatePage";
import "./assets/reset.css";

const storageTodo = JSON.parse(window.localStorage.getItem("todo"));
function App() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [todoList, setTodoList] = useState(storageTodo || {});
  const [todoId, setTodoId] = useState();
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList);

  return (
    <div className="wrap">
      {!mode ? (
        <ListPage
          todoList={todoList}
          setTodoList={setTodoList}
          setTodoId={setTodoId}
        />
      ) : (
        <CreatePage
          mode={mode}
          todoId={todoId}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
    </div>
  );
}

export default App;

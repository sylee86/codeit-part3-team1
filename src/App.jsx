import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ITEMS_PER_PAGE = 10;
const MODES = ["create", "update"];
function App() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [todoId, setTodoId] = useState();
  const [todoList, setTodoList] = useState({});
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [storageTodo, setStorageTodo] = useState(() =>
    JSON.parse(localStorage.getItem("todo") || "{}")
  );

  // useMemo 적용필요함
  const sortedList = Object.fromEntries(
    Object.entries(storageTodo).sort((a, b) => b[1].createdAt - a[1].createdAt)
  );

  //무한스크롤 //useCallback 적용하면 좋음
  const loadMore = () => {
    setCursor((currentCursor) => {
      const todoEntries = Object.entries(sortedList);
      const nextCursor = currentCursor + ITEMS_PER_PAGE;
      const newTodos = Object.fromEntries(
        todoEntries.slice(currentCursor, nextCursor)
      );
      setTodoList((prev) => ({ ...prev, ...newTodos }));
      setHasMore(Object.keys(newTodos).length === 10);

      return nextCursor;
    });
  };

  // 추가,수정,삭제
  const refreshLoad = () => {
    // 최신 localStorage 다시 읽기
    const latestData = JSON.parse(localStorage.getItem("todo") || "{}");
    setStorageTodo(latestData);
    const sortedList = Object.fromEntries(
      Object.entries(latestData).sort((a, b) => b[1].createdAt - a[1].createdAt)
    );

    //초기화
    setTodoList({});
    setCursor(0);

    //처음10개
    const initTodos = Object.fromEntries(
      Object.entries(sortedList).slice(0, ITEMS_PER_PAGE)
    );
    setTodoList(initTodos);
    setCursor(ITEMS_PER_PAGE);
  };

  useEffect(() => {
    refreshLoad();
  }, []);
  return (
    <div className="wrap">
      <Outlet
        context={{
          mode: MODES.includes(mode) ? mode : "create",
          todoList,
          setTodoId,
          todoId,
          setCursor,
          storageTodo,
          setStorageTodo,
          ITEMS_PER_PAGE,
          loadMore,
          refreshLoad,
          hasMore,
        }}
      />
      <ToastContainer />
    </div>
  );
}

export default App;

import { useEffect, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "@/components/Button";
import deepCopyTodos from "@/utils/deepCopyTodos";
import handleLocalStorageError from "@/utils/handleLocalStorageError";

export default function ListPage() {
  const {
    todoList,
    setTodoId,
    storageTodo,
    setStorageTodo,
    loadMore,
    refreshLoad,
    hasMore,
  } = useOutletContext();
  const navigate = useNavigate();
  const observerTarget = useRef(null);

  // 추가
  const onCreate = () => {
    navigate({
      pathname: "/edit",
      search: "?mode=create",
    });
  };

  // 수정
  const onEdit = (id) => {
    setTodoId(id);
    navigate({
      pathname: "/edit",
      search: "?mode=update",
    });
  };

  // 삭제
  const onDelete = (id) => {
    const newTodoList = deepCopyTodos(storageTodo);
    delete newTodoList[id];
    setStorageTodo(newTodoList);
    try {
      window.localStorage.setItem("todo", JSON.stringify(newTodoList));
    } catch (e) {
      handleLocalStorageError(e);
    }
    refreshLoad();
  };

  //무한스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [loadMore]); //디펜던시 세밀하게 넣어야함. 안넣으면 IntersectionObserver실행 시점만 옵져버 콜백함수(loadMore) 기억
  // hook으로 만들기
  // unObserve vs disconnect 차이점 확인필요
  // unObserve : 하나의 entries 해제시킴
  // disconnect : 모든 entries 해제시킴
  return (
    <>
      <h1>TODO 목록</h1>
      <div className="btns">
        <Button onClick={onCreate}>추가</Button>
      </div>
      <div className="todoWrap">
        <ul className="todoList">
          {Object.keys(todoList).map((key) => {
            const { title, description } = todoList[key];
            return (
              <li key={key}>
                <div className="field">
                  <div className="tit">Title :</div>
                  <div className="data">{title}</div>
                </div>
                <div className="field">
                  <div className="tit">description :</div>
                  <div className="data">{description}</div>
                </div>
                <div className="btn">
                  <Button onClick={() => onEdit(key)}>수정</Button>
                  <Button onClick={() => onDelete(key)}>삭제</Button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="observerTarget" ref={observerTarget}></div>
      </div>
    </>
  );
}

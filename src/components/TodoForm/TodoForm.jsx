import { useEffect } from "react";
import Button from "@/components/Button/Button";
import "./TodoForm.css";

export default function TodoForm({
  title,
  setTitle,
  description,
  setDescription,
  onClick,
  btnTxt,
  todoId,
  todoList,
}) {
  const handleTitle = (e) => {
    const val = e.target.value; //글자수 벨리데이션 처리 필요
    setTitle(val);
  };
  const handleDesc = (e) => {
    const val = e.target.value; //글자수 벨리데이션 처리 필요
    setDescription(val);
  };

  useEffect(() => {
    if (todoId) {
      //key,value 자료구조로 변화 필요 ()
      todoList.find((el) => {
        if (el.id === todoId) {
          setTitle(el.title);
          setDescription(el.description);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoId, todoList]);

  return (
    <>
      <ul className="todoForm">
        <li>
          <div className="tit">title</div>
          <div className="data">
            <input value={title} onChange={handleTitle} />
          </div>
        </li>
        <li>
          <div className="tit">description</div>
          <div className="data">
            <textarea value={description} onChange={handleDesc} />
          </div>
        </li>
      </ul>
      <div className="btnArea">
        <Button onClick={onClick}>{btnTxt}</Button>
      </div>
    </>
  );
}

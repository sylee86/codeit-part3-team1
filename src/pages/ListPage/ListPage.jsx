import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "@/components/Button/Button";
import "./ListPage.css";

export default function ListPage() {
  const { todoList, setTodoList, setTodoId } = useOutletContext();
  const navigate = useNavigate();

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
    const newTodoList = { ...todoList };
    delete newTodoList[id];
    setTodoList(newTodoList);
  };
  return (
    <>
      <h1>TODO 목록</h1>
      <div className="btns">
        <Button onClick={onCreate}>추가</Button>
      </div>
      <ul className="todoList">
        {Object.values(todoList).map((item) => {
          return (
            <li key={item.id}>
              <div className="field">
                <div className="tit">Title :</div>
                <div className="data">{item.title}</div>
              </div>
              <div className="field">
                <div className="tit">description :</div>
                <div className="data">{item.description}</div>
              </div>
              <div className="btn">
                <Button onClick={() => onEdit(item.id)}>수정</Button>
                <Button onClick={() => onDelete(item.id)}>삭제</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

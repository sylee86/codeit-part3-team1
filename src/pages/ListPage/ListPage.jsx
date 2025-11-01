import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import "./ListPage.css";

export default function ListPage({ todoList, setTodoList, setTodoId }) {
  const navigate = useNavigate();
  const onCreate = () => {
    navigate({
      pathname: "/edit",
      search: "?mode=create",
    });
  };

  const onEdit = (id) => {
    setTodoId(id);
    navigate({
      pathname: "/edit",
      search: "?mode=update",
    });
  };

  const onDelete = (id) => {
    const newTodoList = todoList.filter((el) => el.id !== id);
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

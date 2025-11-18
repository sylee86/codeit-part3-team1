import Button from "@/components/Button";
import { useEffect } from "react";
import { toast } from "react-toastify";

const TITLE_LIMIT = 30;
const DESCRIPTION_LIMIT = 200;
const toastId = "validationToast";

export default function TodoForm({
  mode,
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
    const val = e.target.value;
    if (val.length <= TITLE_LIMIT) {
      setTitle(val);
    } else {
      toast(`최대 ${TITLE_LIMIT}자까지 입력할 수 있습니다.`, {
        toastId,
        autoClose: 2000,
      });
    }
  };
  const handleDesc = (e) => {
    const val = e.target.value;
    if (val.length <= DESCRIPTION_LIMIT) {
      setDescription(val);
    } else {
      toast(`최대 ${DESCRIPTION_LIMIT}자까지 입력할 수 있습니다.`, {
        toastId,
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    if (mode === "update" && todoId) {
      setTitle(todoList[todoId].title);
      setDescription(todoList[todoId].description);
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

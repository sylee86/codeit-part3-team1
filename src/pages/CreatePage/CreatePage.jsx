import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import TodoForm from "@/components/TodoForm/TodoForm";

const toastId = "validationToast";

const CreatePage = () => {
  const { mode, todoList, setTodoList, todoId } = useOutletContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 저장
  const onSave = () => {
    if (!title.trim() & !description.trim()) {
      toast("todo를 작성해주세요.", {
        toastId,
        autoClose: 2000,
      });
      return;
    }
    const idx = Date.now();
    setTodoList({
      ...todoList,
      [idx]: {
        id: idx,
        title,
        description,
      },
    });
    navigate("/");
  };

  // 수정
  const onUpdate = () => {
    const newTodoList = { ...todoList };
    newTodoList[todoId].title = title;
    newTodoList[todoId].description = description;
    setTodoList(newTodoList);
    navigate("/");
  };

  return (
    <>
      <h1>TODO {mode === "create" ? "작성" : "수정"}</h1>
      <TodoForm
        mode={mode}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        todoList={todoList}
        todoId={todoId}
        onClick={mode === "create" ? onSave : onUpdate}
        btnTxt={mode === "create" ? "작성" : "수정"}
      />
    </>
  );
};

export default CreatePage;

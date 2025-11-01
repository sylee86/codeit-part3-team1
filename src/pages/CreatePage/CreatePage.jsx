import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "@/components/TodoForm/TodoForm";

const CreatePage = ({ mode, todoList, setTodoList, todoId }) => {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const onSave = () => {
    if (!title.trim()) {
      alert("todo를 작성해주세요.");
      return;
    }
    const idx = Date.now();
    setTodoList({
      ...todoList,
      idx: {
        id: idx,
        title,
        description,
      },
    });
    navigate("/");
  };
  const onUpdate = ({ title, description }) => {
    const newTodoList = Object.values(todoList).map((item) => {
      if (item.id === todoId) {
        item.title = title;
        item.description = description;
      }
    });
    setTodoList(newTodoList);
    navigate("/");
  };

  return (
    <>
      <h1>TODO {mode === "create" ? "작성" : "수정"}</h1>
      {mode === "create" ? (
        <TodoForm
          mode={mode}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={onSave}
          btnTxt="확인"
        />
      ) : (
        <TodoForm
          mode={mode}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={onUpdate}
          todoList={todoList}
          todoId={todoId}
          btnTxt="수정"
        />
      )}
    </>
  );
};

export default CreatePage;

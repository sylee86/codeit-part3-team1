import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import TodoForm from "@/components/TodoForm";
import handleLocalStorageError from "@/utils/handleLocalStorageError";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import deepCopyTodos from "@/utils/deepCopyTodos";

const toastId = "validationToast";

const CreatePage = () => {
  const { mode, todoList, todoId, storageTodo, setStorageTodo, refreshLoad } =
    useOutletContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 저장
  const onSave = () => {
    if (!title.trim() || !description.trim()) {
      toast("todo를 작성해주세요.", {
        toastId,
        autoClose: 2000,
      });
      return;
    }
    const idx = Date.now().toString();

    const newTodoList = deepCopyTodos(storageTodo);
    newTodoList[idx] = {
      title,
      description,
      createdAt: Date.now(),
    };
    setStorageTodo(newTodoList); // 전체 데이터를 그대로 업데이트

    try {
      window.localStorage.setItem("todo", JSON.stringify(newTodoList));
    } catch (e) {
      handleLocalStorageError(e);
    }
    navigate("/");

    refreshLoad();
  };

  // 수정
  const onUpdate = () => {
    const newTodoList = deepCopyTodos(storageTodo);
    newTodoList[todoId] = {
      ...newTodoList[todoId],
      title,
      description,
      updatedAt: Date.now(),
    };
    setStorageTodo(newTodoList);

    try {
      window.localStorage.setItem("todo", JSON.stringify(newTodoList));
    } catch (e) {
      handleLocalStorageError(e);
    }
    navigate("/");
    refreshLoad();
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

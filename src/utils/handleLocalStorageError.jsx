import { toast } from "react-toastify";

export default function handleLocalStorageError(e) {
  const toastId = "validationToast";
  switch (e.name) {
    case "QuotaExceededError":
      toast("저장 공간이 부족합니다.", {
        toastId,
        autoClose: 2000,
      });
      break;
    case "SecurityError":
      toast("브라우저 보안 설정으로 인해 저장할 수 없습니다.", {
        toastId,
        autoClose: 2000,
      });
      break;
    default:
      console.error("localStorage 에러:", e.name, e.message);
  }
}

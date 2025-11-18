import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="ErrorPage">
      <h1>오류가 발생했습니다.</h1>
      <p>일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
      <Button onClick={() => navigate("/")}>홈으로 가기</Button>
    </div>
  );
}

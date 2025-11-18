import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="notFoundPage">
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Button onClick={() => navigate("/")}>홈으로 가기</Button>
    </div>
  );
}

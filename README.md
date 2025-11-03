### 멘토님 피드백 (10/29 수)

[x] react-router-dom의 data mode로 변경 (https://reactrouter.com/api/hooks/)
[x] mode 없는 경우나 없는 경로로 접근 시 대비 폴백(fallback) 처리
[] todoList -> useMemo, useCallBack 사용방법 공부하여 리렌더 최적화시키기
[] parse,stringify 방식이 성능적으로 좋은지? 더 좋은방법이 있을지 (깊은 복사, 얕은 복사)
[x] alert()은 다음 javascript 실행을 막음. ux흐름으로 봤을때 toast 등 사용이 좋음
[x] 데이터 용량이 정해져있어서 데이터의 크기 제한을 두는 것이 좋음 -> 글자수 벨리데이션 처리 필요
[x] 배열 목록 많을 경우 find로 하나만 찾을 경우 효율 떨어짐 -> 특정값만 찾아낼수 있도록 key,value 형식으로 변경

### 멘토님 과제 (~11/3 월)

[x] 생성(/edit?mode=create), 수정(/edit?mode=update) 기능 완성
[x] 목록 페이지(/) 의 Todo List의 개별 Item에서

- [수정] 버튼 클릭 시, /edit?mode=update로 이동, 그리고 해당 수정 페이지에서 Todo Item의 정보 그대로 출력
- [삭제] 버튼 클릭 시, LocalStorage에서 해당 Item 정보를 뺀 나머지 정보를 저장.

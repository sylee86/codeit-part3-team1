### 멘토님 피드백 (10/29 수)

1. react-router-dom의 data mode로 변경 (https://reactrouter.com/api/hooks/) --- 완료
2. mode 없는 경우나 없는 경로로 접근 시 대비 풀백(fallback) 처리
3. todoList -> useMemo, useCallBack 사용방법 공부하여 리렌더 최적화시키기
4. parse,stringify 방식이 성능적으로 좋은지? 더 좋은방법이 있을지 (깊은 복사, 얕은 복사)
5. alert()은 다음 javascript 실행을 막음. ux흐름으로 봤을때 toast 등 사용이 좋음
6. 데이터 용량이 정해져있어서 데이터의 크기 제한을 두는 것이 좋음 -> 글자수 벨리데이션 처리 필요
7. 배열 목록 많을 경우 find로 하나만 찾을 경우 효율 떨어짐 -> 특정값만 찾아낼수 있도록 key,value 형식으로 변경

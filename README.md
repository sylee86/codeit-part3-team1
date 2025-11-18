### 멘토님 피드백 (10/29 수)

[x] react-router-dom의 data mode로 변경 (https://reactrouter.com/api/hooks/)
[x] mode 없는 경우나 없는 경로로 접근 시 대비 폴백(fallback) 처리
[] todoList -> useMemo, useCallBack 사용방법 공부하여 리렌더 최적화시키기
[] parse,stringify 방식이 성능적으로 좋은지? 더 좋은방법이 있을지 (깊은 복사, 얕은 복사)
[x] alert()은 다음 javascript 실행을 막음. ux흐름으로 봤을때 toast 등 사용이 좋음
[x] 데이터 용량이 정해져있어서 데이터의 크기 제한을 두는 것이 좋음 -> 글자수 벨리데이션 처리 필요
[x] 배열 목록 많을 경우 find로 하나만 찾을 경우 성능 떨어짐 -> 특정값만 찾아낼수 있도록 key,value 형식으로 변경

### 멘토님 과제 (~11/3 월)

[x] 생성(/edit?mode=create), 수정(/edit?mode=update) 기능 완성
[x] 목록 페이지(/) 의 Todo List의 개별 Item에서

- [수정] 버튼 클릭 시, /edit?mode=update로 이동, 그리고 해당 수정 페이지에서 Todo Item의 정보 그대로 출력
- [삭제] 버튼 클릭 시, LocalStorage에서 해당 Item 정보를 뺀 나머지 정보를 저장.

### 멘토님 피드백 (11/3 월)

[x] useEffect 사용 로컬스토리지 저장 -> 트리거 많아질 경우 불필요하게 동작할수있음. apicall일땐 서버까지 영향 미침
[x] parse,stringify( json포멧이맞는지 검사) 사용시 에러 대응하여 try catch 처리 필요
[x] {..todoList} 방법은 얉은 복사 -> react 상태관리할때 불편성을 지키라고 하는 이유가 뭔지? 원복객체와 참조관계 끊어냈는지? 깊은 복사, 얉은 복사 공부
[x] const keys = Object.keys(todoList); -> map(인덱스)를 활용하여 매핑
[x] 모드 URL추출 -> 벨리데이션 체크필요 (모드가 update, create 아닐경우)
[x] 와일드카드 -> NotFoundPage
[x] Date.now() -> 숫자 1개당 1byte 총12바이트 트래픽으로 잡힘 (데이터 비용으로 고려할것)

### 멘토님 피드백 (11/5 수)

-공통
[x] css 배럴구조로 셋팅 / CreatePage/CreatePage 등의 jsx파일경로 수정
[x] 수정,추가,삭제에 parse,stringify 공통사용함 -> /utils/todojs 함수로 만들어보기

-CreatePage.jsx
[x] mode === "create" || mode === "update" 엄격함. 사용자관점에서? 유연하게 수정필요

### 멘토님 과제 (~11/10 월)

- 무한 스크롤 기능 구현하기
  [x] 기본 투두 10개 제한. 스크롤 시 특정영역 감지되면 신규 투두 10개 더 생기기
  [x] intersectionObserver (javascript 클래스) 기술 사용
  [x] intersecting : true / false -> 탐지선(target)이 뷰포트에 보이는지 안보이는지 체크
  [] 커스텀 hook - useIntersectionObserver으로 만들어서 다른 화면에서도 사용 가능하게 만들어보기

---

### 멘토님 피드백 (11/11 화)

[x] slice : 무한 스크롤시 0부터 추가되게 되어있음 -> 새로 보여줄 목록만 추가로 붙이는 방식으로 수정
[x] IntersectionObserver : 클린업함수 적용필요 (기존 쌓여있던 IntersectionObserver 제거해야함.)
[] mode 유연하게 처리 (비슷한 url에 들어왔을 경우 페이지 머무르는 방향)

### 멘토님 스터디 (11/17 월)

[] 컴파운드 패턴(Compound Pattern) 통해서 복합컴퍼넌트 만들어보기 (공통컴퍼넌트 재사용성 높혀서 만드는 방법) - 아코디언

- 참고url
  [compound-pattern](https://www.patterns.dev/react/compound-pattern/)
  [UI 컴포넌트 라이브러리](https://ui.shadcn.com/docs/components/accordion)

```javascript
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  Accordion
</Accordion>
```

### 멘토님 피드백 (11/17 월)

[] useMemo 사용하여 수정 - sortedList (사용이유 : 리랜더시에 불필요한 재선언을 막기위해 사용)
[] useCallback 사용해보기 - loadMore
[] IntersectionObserver - 디펜던시 세밀하게 넣기, hook으로 만들기
[] unObserve vs disconnect 차이점 확인필요

<!-- 동국님 소스 참고
useEffect(() => {
  if (!ref.current) return;
  if (!observer) return;
  if (ref.current) {
    // 겹치는 부분 따로 함수로 빼기 (12-15, 17-22줄)
    observer.unobserve(ref.current);
  }
  observer.observe(ref.current);
  return () => {
    if (ref.current) {
      // 언마운트가 될 때만 ref가 null이 된다.
      // 리렌더될때는
      // clean code 책 참고하기! (목차만 봐도 됨)
      // cleanup을 실행시키는 시점은 시작 전에, 언마운트될때
      observer.unobserve(ref.current);
    }
  };
}, deps); -->

import { Outlet } from 'react-router-dom';
function About() {
  return (
    <div>
      <div>
        회사정보임
        {/* 여기서 Outlet 태그는 중첩라우팅의 자식 라우트에서 렌더링할 장소를 명시하는거 */}
        {/* 즉 여기다가 자식 라우트의 element tag내의 DOM 요소들이 박힌다. */}
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default About;

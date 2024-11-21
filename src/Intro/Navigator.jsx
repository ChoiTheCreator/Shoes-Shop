import { useNavigate } from 'react-router-dom';

function Intro() {
  //페이지 이동을 도와주는 함수
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-title">ShoeShop</div>
      <div className="nav-wide"></div>

      {/* 온클릭 이벤트함수에 네비게이트 객체를 넣어주는 방식으로 Link를 대신한다 */}
      <div onClick={() => navigate('/')}> Home</div>
      <div onClick={() => navigate('/detail')}> Details</div>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
}

export default Intro;

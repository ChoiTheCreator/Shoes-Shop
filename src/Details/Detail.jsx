/*eslint-disable*/

import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
  //useParams라는 걸 써서 url 파라미터로 디테일 컴포넌트를 하나만 만들어도
  //수십개의 디테일 컴포넌트를 다 보여줄수 있게.
  let { id } = useParams();
  return (
    <div className="detail-container">
      <div className="row">
        <div className="col-md-6">
          <img src={shoes[id].imgSrc} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

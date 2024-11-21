/*eslint-disable */
import { useState, useEffect } from 'react';
import './App.css';
import data from './db/data.jsx';
import Airforce from './shoesList/Airforce.jsx';
import Timberland from './shoesList/TimberLand.jsx';
import CarharrtAirforce from './shoesList/CarharttAirforce.jsx';
import Intro from './Intro/Navigator.jsx';

import Detail from './Details/Detail.jsx';
import Event from './Details/Event.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [shoes, setShoes] = useState(data);

  //페이지 이동을 도와주는 함수 (Link tag도 있는데 왜 굳이?)

  return (
    <div className="total-container">
      <Routes>
        {/* 메인 페이지 */}
        <Route
          //path -> '/'라면 메인페이지 뒤에 아무것도 안 붙인것
          //element -> 속성안에는 이 라우트에 들어갈때, 이것들을 보여주고 싶어요 하는거
          //컴포넌트 분리하면 이렇게 편하게 넣어도 되니 좋겠네요.
          path="/"
          element={
            <div>
              <Intro></Intro>
              <div className="main-bg">main background</div>
              <div className="product-container">
                <CarharrtAirforce shoes={shoes} />
                <Airforce shoes={shoes} />
                <Timberland shoes={shoes} />
              </div>
            </div>
          }
        />

        {/* 근데 여기에 디테일 페이지를 여러개쓰고싶다면요? */}
        {/* url파라미터를 쓴다! detail/:id or detail/1을 쓰면 거기에 해당하는 다른 페이지로 가게끔 */}
        {/* useParms라는 외부라이브러리 -> 그 뒤 /id 값을 준다  */}
        <Route
          path="/detail/:id"
          element={
            <div>
              <Intro></Intro>
              <div className="detail-container">
                <Detail shoes={shoes}></Detail>
              </div>
            </div>
          }
        ></Route>

        {/* 404 page using *  */}
        <Route path="*" element={<div>404 PAGE </div>}></Route>

        {/* use NestedRoute */}
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>hi</div>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="today" element={<div>오늘 이벤트는 배송료 무료!!</div>}>
            {' '}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

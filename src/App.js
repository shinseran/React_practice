import React, {useState} from 'react'; //state 만들기
import logo from './logo.svg';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['여자코트추천','강남 우동 맛집','강남 곱창 맛집']); //destructuring

 let posts = '강남고기맛집'; //데이터 바인딩 위한 변수선언





  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} </h3>
        <p>10월 28일 발행</p> 
        <hr/>
         </div>
       <div className="list">
        <h3> {글제목[1]} </h3>
        <p>10월 28일 발행</p> 
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>10월 28일 발행</p> 
        <hr/>
      </div>
      
     
      
      
    </div>
  );
}

export default App;

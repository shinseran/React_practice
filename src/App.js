/* eslint-disable */
import React, {useState} from 'react'; //state 만들기
import logo from './logo.svg';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['여자코트추천','강남 우동 맛집','강남 곱창 맛집']); //destructuring
 let [따봉,따봉변경] = useState(0);
 let posts = '강남고기맛집'; //데이터 바인딩 위한 변수선언

 function 제목바꾸기(){
   let newArray= [...글제목];//deepcopy
   newArray[0]='아동코트추천';
  글제목변경(newArray);
 }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>👏</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{따봉변경(따봉 +1)}}>👍</span> {따봉} </h3>
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

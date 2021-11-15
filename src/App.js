/* eslint-disable */
import React, {useState} from 'react'; //state 만들기
import logo from './logo.svg';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['여자코트추천','강남 우동 맛집','강남 곱창 맛집']); //destructuring
 let [따봉,따봉변경] = useState(0);
 let posts = '강남고기맛집'; //데이터 바인딩 위한 변수선언

 let [modal,modal변경] =useState(false);//온오프스위치(클릭안하면 안보이고 클릭하면 보이게)
 let [누른제목,누른제목변경] = useState(0);
 let [입력값,입력값변경]=useState('');

 //const 어레이=[2,3,4];
 
 // const 뉴어레이=어레이.map(function(a){
  // return a*2
 //})

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
      
      
      { 
        
        글제목.map(function(a,i){
          return(
            <div className="list" key={i}>
            <h3  onClick={ ()=>{누른제목변경(i) } }> {a}<span onClick={ ()=>{따봉변경(따봉 +1)}}>👍</span> {따봉} </h3>
            <p>10월 28일 발행</p> 
            <hr/>
          </div>
          )
        })
      
      }  

     { /*<button onClick={ ()=>{누른제목변경(0) }} >버튼1</button>
      <button onClick={ ()=>{누른제목변경(1) }} >버튼2</button>
    <button onClick={ ()=>{누른제목변경(2) }} >버튼3</button>*/}

    {/*{입력값}  화면에 입력한 값이 나오게 됨
    <input onChange={(e)=>{입력값변경(e.target.value) } }  /> */}

    <div className="publish">
      <input onChange={ (e)=>{ 입력값변경(e.target.value)} }/>
      <button onClick={ ()=>{ 
        
        const arrayCopy=[...글제목];
        arrayCopy.unshift(입력값);
        글제목변경(arrayCopy);
      }}>저장</button>
    </div>





  <button onClick={()=>{modal변경(!modal)}}>버튼</button>



     {
       modal ===true
       ? <Modal 글제목={글제목 } 누른제목={누른제목}></Modal> //자식컴포넌트 < 작명={전송할state}></>
       : null
     }
     
      
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>

    </div>
  )

}



export default App;

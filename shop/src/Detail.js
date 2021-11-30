import React, { useEffect, useState } from 'react';
import {useHistory,useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20 px;

`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상}
`;

// class Detail2 extends React.Component{
//   componentDidMount(){

//   }
//   componentWillUnmount(){

//   }
// }






function Detail(props){


  const [alert, setalert] = useState(true);
  const [inputData, setinputData] = useState('');

  useEffect(()=> {
   const timer = setTimeout(() => {setalert(false) },2000) //2초후에 특정코드 실행
   //return function 어쩌구(){실행할 코드 } //컴포넌트가 사라질때 실행됨
   return () =>{clearTimeout(timer)} //컴포넌트 사라질때 같이 사라지게 해서 버그 없애기
  },[alert]); // 실행조건넣는곳 state를 넣음 ,빈칸이면 업데이트 될때는 실행안됨 alert

  

  


    let {id}=useParams();
    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id == id
    });

    let useHistory=useHistory();//방문기록담기

    return(
        <div className="container">
          <박스>
            <제목 className="red">Detail</제목>
          </박스>

          <input onChange={(e)=>{setinputData(e.target.value)}}/> 
          {/* input에 입력된 값임 */}

          {
            alert == true
            ?(<div className="my-alert2">
               <p>재고가 얼마 남지 않았습니다.</p>
             </div>)
            : null
          }
          

          <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick=
                {()=>{history.push('/')}}>뒤로가기</button>
              </div>
          </div>
        </div> 
    )
}

export default Detail;
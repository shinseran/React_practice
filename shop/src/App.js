/* eslint-disable*/
import React, { useState } from 'react';
import { Navbar,Container,Nav,NavDropdown ,Button} from 'react-bootstrap';
import './App.css';
import data from './data.js'
import detail from './Detail.js'

import {Link,Route,Switch} from 'react-router-dom'; //링크는 링크바꾸기 라우트는 페이지 옮기기 스위치는 라우트하나씩만 보여줌

function App() {

  let[shoes,shoes변경] = useState(data);

  return (
    <div className="App">
      
     <Navbar bg="light" expand="lg">
      <Container>
       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         <Nav.Link as={Link} to="/">Home </Nav.Link>
         <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown>
         </Nav>
       </Navbar.Collapse>
      </Container>
       </Navbar>

       <Switch>

       <Route exact path="/">
      <div className="background">
        <h1>20% Season off</h1>
        <p>
          This is a simple here unit, a simple
          <br/>
          jumbotron-style component for calling
          <br/>
          extra attention to featured content or impormation.
          
        </p>
        <p>
          <Button variant="primary">Lean more</Button>
        </p>
      </div>
      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return  <Card shoes={shoes[i]} i={i} key={i}/>
            })
          }
         
          
        </div>
      </div>

      </Route>

      
       
     

      <Route path="/detail/:id"> 
        
        <Detail shoes={shoes}/>
      </Route>

     

      <Route path="/:id">
        <div>경로에 /아무거나 적었을때 이거 보여주기</div>
      </Route>

      </Switch>


      {/*<Route path="/어쩌구"> component={Modal}</Route>*/}

    
    </div>


  );
}


function Card(props){
  return(
    <div className="col-md-4">
      <img src={'http://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
  </div>
  )
}

export default App;
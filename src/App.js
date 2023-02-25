import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'
import { addData } from './store/dataSlice.js';
import axios from 'axios';

function App() {
  let dispatch = useDispatch()
  let navigate = useNavigate();

  let [ count, setCount ] = useState(0);

  useEffect(() => {

  }, [count]);

  function moreData() {
    let url = 'https://codingapple1.github.io/shop/data2.json';
    if(count > 0) {
      url = 'https://codingapple1.github.io/shop/data3.json';
    }
    
    axios.get(url).then((res) => {
      dispatch(addData(res.data));
    }).catch(() => console.log('실패'));
  }

  return (
    <div className="App">
      
      <NavHome />

      <Routes>
        <Route path='/' element={
          <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              <Card navigate={navigate}/>
              {
                count < 2 ?
                <button onClick={() => {
                  moreData();
                  setCount(count+1);
                }}>More</button>
                : null
              }
            </div>
          </div>
          </>
        } />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} >
          <Route path='member' element={<div>멤버들</div>} />
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='/event' element={<Event />} >
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

function NavHome(){
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/event">Event</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
      <Nav className="ms-auto">반가워요 Kim</Nav>
      </Container>
    </Navbar>
  )
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  let shoes = useSelector((state) => state.data);

  return (
    shoes.map((item, idx) => {
      return (
      <div className="col-md-4" key={item.id} onClick={() => props.navigate('/detail/' + item.id)}>
        <img src={'https://codingapple1.github.io/shop/shoes'+ (idx + 1) +'.jpg'} width="80%" alt={item.title}/>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
    )})
  )
}

export default App;

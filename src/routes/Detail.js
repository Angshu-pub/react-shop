import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg === 'yellow' ? 'black' : 'white' };
  padding : 10px;
`;

function Detail(props) {
    let { id } = useParams();
    let item = props.shoes.find((x) => x.id === parseInt(id));

    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
      return ()=>{
        setFade('')
      }
    }, [tab])

    useEffect(() => {
        let a = setTimeout(() => setAlert(false), 2000);
        return () => {
            clearTimeout(a);
        }
    }, [alert])
    
    useEffect(() => {
        if(isNaN(num)) console.log('그러지마세요');
    }, [num])

    return (
        <div className={'container start ' + fade} key={item.id} >
            { 
                alert ? 
                <div>
                    <Box>
                        <YellowBtn bg="yellow">오렌지색 버튼임</YellowBtn>
                    </Box>
                </div>
                : null
            }
            <input onChange={(e) => setNum(e.target.value)} />
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (item.id + 1) +'.jpg'} width="100%" alt={item.title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div> 
    )
}

function TabContent({tab}){
    let [fade, setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
      return ()=>{
        setFade('')
      }
    }, [tab])

    return (
      <div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
      </div>  
    ) 
}

export default Detail;
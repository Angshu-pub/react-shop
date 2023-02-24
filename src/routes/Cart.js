import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from './../store/userSlice.js';
import { plusCount } from './../store.js'

function Cart() {
    let state = useSelector((state) => state );
    let dispatch = useDispatch()

    return (
        <div>
            <div>{state.user.name} {state.user.age}, 안녕하세요</div> 
            <button onClick={()=> dispatch(changeName())}>변경</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((item) => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td><button onClick={() => dispatch(plusCount(item.id))}>+</button></td>
                        </tr>    
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}


export default Cart;
import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCount(state, idx) {
            let num = state.findIndex((x) => x.id === parseInt(idx.payload));
            state[num].count++;
        },
        addItem(state, obj) {
            // 같은 reducers 내의 다른 함수 호출하는건 하지말래는군
            let num = state.findIndex((x) => x.id === parseInt(obj.payload.id));

            if(num > -1) {
                state[num].count++;
            } else {
                let objTemp = {id : obj.payload.id, name : obj.payload.title, count : 1};
                state.push(objTemp);
            }
        },
        delItem(state, idx) {
            let num = state.findIndex((x) => x.id === parseInt(idx.payload));
            state.splice(num, 1);
        }
    }
})

export let { plusCount, addItem, delItem } = cart.actions;

export default cart;
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

let data = createSlice({
    name : 'data',
    initialState : [
        {
          id : 0,
          title : "White and Black",
          content : "Born in France",
          price : 120000
        },
        {
          id : 1,
          title : "Red Knit",
          content : "Born in Seoul",
          price : 110000
        },
        {
          id : 2,
          title : "Grey Yordan",
          content : "Born in the States",
          price : 130000
        }
    ],
    reducers : {
        moreData(state, count) {
            let url = 'https://codingapple1.github.io/shop/data2.json';
            if(count.payload > 0) {
              url = 'https://codingapple1.github.io/shop/data3.json';
            }

            axios.get(url).then((res) => {
                console.log(res.data)
                // state가 arrow function 만나서 다른 값이라 안들어가는 듯?;;
                // state.push(res.data) 
            }).catch(() => console.log('실패'));

        }
    }
})

export let { moreData } = data.actions;

export default data;
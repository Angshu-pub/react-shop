import { createSlice } from "@reduxjs/toolkit"

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
        addData(state, arr) {
            state.push(...arr.payload);
        }
    }
})

export let { addData } = data.actions;

export default data;
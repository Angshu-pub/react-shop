import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name : 'user',
    initialState : {name : 'Kim', age : 20},
    reducers : {
        changeName(state){
          state.name = 'Park'
          state.age++
        }        
    }
})

export let { changeName } = user.actions;

export default user;
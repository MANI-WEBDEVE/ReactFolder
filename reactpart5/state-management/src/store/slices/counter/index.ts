import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        increamenrt: (state) => {
            state += 1
            return state
        },
        decrement: (state) => {
            state -= 1
            return state
        }
    }
})

export const { increamenrt, decrement } = counterSlice.actions;
export default counterSlice.reducer;
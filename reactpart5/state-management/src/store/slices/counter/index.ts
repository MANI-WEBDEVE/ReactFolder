import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        increamenrt: (state) => {
            state += 1
        },
        decrement: (state) => {
            state -= 1
        }
    }
})

export const { increamenrt, decrement } = counterSlice.actions;
export default counterSlice.reducer;
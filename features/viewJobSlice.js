import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    type : "job description",
}


const viewJobSlice = createSlice({
    name : "viewJob",
    initialState,
    reducers : {
        setViewJob : (state, action) => {
            state.type = action.payload.type
        },
    }
})

export const { setViewJob } = viewJobSlice.actions

export const selectViewJob = (state) => state.viewJob.type

export default viewJobSlice.reducer
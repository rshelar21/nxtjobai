import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    type : null,
}


const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        setModal : (state, action) => {
            state.type = action.payload.type
        },
        closeModal : (state, action) => {
            state.type = action.payload.type
        }
    }
})

export const { setModal, closeModal } = modalSlice.actions

export const selectModal = (state) => state.modal.type

export default modalSlice.reducer
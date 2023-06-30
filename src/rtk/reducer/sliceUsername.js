import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username : ''
}
const sliceUsername = createSlice({
    name : 'username',
    initialState,
    reducers : {
        WriteUsername : (state , action)=>{
            state.username = action.payload
        }
    }
})

export const {WriteUsername} = sliceUsername.actions;
export default sliceUsername.reducer;
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
     details:[]
}

const authSlice  = createSlice({
    name:"details",
    initialState,
    reducers : {
         setdetails(state , action) {
          state.details = action.payload
          console.log(state.details);
        },
    },
})


export const {setdetails } = authSlice.actions;
export default authSlice.reducer;
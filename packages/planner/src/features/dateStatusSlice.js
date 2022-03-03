//want dateStatus to be an array of objects containing { date : 3/2/22, status: "completed/etc" }
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dateStatusList: []
}

const dateStatusSlice = createSlice({
    name: 'dateStatus',
    initialState,
    reducers: {

        saveStatus: (state, action) => {
            state.dateStatusList.push(action.payload)
        },  
    }
});

export const { saveStatus } = dateStatusSlice.actions

export const selectDateStatus = state => state.dateStatus.dateStatusList

export default dateStatusSlice.reducer
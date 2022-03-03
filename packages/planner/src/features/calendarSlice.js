//boolList should be array of objects ie. [{ "datePassed": bool, "items": bool, "itemsDue": bool }, {}]
//depending on these 2, the calender date should show an svg that relates to its status
//those being completed { true/false, true, false }, incomplete { false, true, true }, overdue { true, true, true }, and unfilled { true/false, false, true/false }
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dateStatusList: []
}

const calendarSlice = createSlice({
    name: 'dateStatus',
    initialState,
    reducers: {

        startStatus: (state, action) => {
            state.dateStatusList.push(action.payload)
        },        

        setStatus: (state, action) => {
            state.dateStatusList.map(item => {
                if (item.items === true && item.itemsDue === false) {
                    completed = true
                }
                else if (item.datePassed === false && item.items === true && item.itemsDue === true) {
                    incomplete = true
                }
                else if (item.datePassed === true && item.items === true && item.itemsDue === true) {
                    overdue = true
                }                
            })
        }

    }
});

for (let i = state.todoList.length - 1; i >= 0; --i) {
    if (state.todoList[i].id === action.payload) {
        state.todoList.splice(i,1);
    }
}


export const { saveStatus } = calendarSlice.actions

export const selectDateStatus = state => state.dateStatus.dateStatusList

export default calendarSlice.reducer
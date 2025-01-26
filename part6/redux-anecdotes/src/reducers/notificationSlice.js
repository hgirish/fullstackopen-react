import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotificationInternal(state, action) {           
            return action.payload
        },
        removeNotification() {
            return ''
        }
    }
})
export const { setNotificationInternal, removeNotification} = notificationSlice.actions
export const setNotification = (content,timeoutInSeconds) => {
   
    return async dispatch => {
        setTimeout(() => {
            dispatch(removeNotification())
        }, timeoutInSeconds * 1000)
        dispatch(setNotificationInternal(content))
    }
}

export default notificationSlice.reducer
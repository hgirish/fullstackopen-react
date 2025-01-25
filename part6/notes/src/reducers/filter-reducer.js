export const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter,
    }
}
const filterReducer = (state = 'ALL', action)=>{
    console.log('ACTION:', action.type);
    
    switch(action.type){
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

export default filterReducer;
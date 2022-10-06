const initialState = {
    counter: -10
}

const reducer = (state=initialState, action) => {
    if(action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'DEC') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    if(action.type === 'SUB') {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    return state
}

export default reducer;
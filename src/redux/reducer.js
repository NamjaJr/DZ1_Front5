const initialState = {
    count: 0
};

export default function reducer(state = initialState, action) {
    if (action.type === 'INCREMENT'){
        return {...state,count: state.count +1}
    }
    if (action.type === 'MORE_INCREMENT'){
        return {...state,count: state.count +10}
    }
    if (action.type === 'RESET'){
        return {...state,count: 0}
    }
    if (action.type === 'DECREMENT'){
        return {...state,count: Math.max(state.count -1,0)}
    }
    if (action.type === 'MORE_DECREMENT'){
        return {...state,count: Math.max(state.count-10,0)}
    }
    return state
}






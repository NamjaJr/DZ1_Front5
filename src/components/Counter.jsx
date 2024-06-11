import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const moreIncrement = () => {
        dispatch({
            type: 'MORE_INCREMENT'
        })
    }

    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    const moreDecrement = () => {
        dispatch({
            type: 'MORE_DECREMENT'
        })
    }


    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={moreIncrement}>+10</button>
            <button onClick={moreDecrement}>-10</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
};

export default Counter;




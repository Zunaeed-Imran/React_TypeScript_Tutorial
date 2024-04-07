import React, { useReducer } from 'react'


const INCREMENT = "INCREMENT";
const RESET = "RESET";
const DECREMENT = "DECREMENT";

type IncrementType = { type: typeof INCREMENT };
type ResetType = { type: typeof RESET};
type DecrementType = { type: typeof DECREMENT};

type CounterActionType = IncrementType | DecrementType | ResetType;

const initialState = {
  count: 0
}
type counterType = {
  count: number
}


const reducer = (state: counterType, action: CounterActionType) => {
switch (action.type) {
  case INCREMENT:
    return { count: state.count + 1 }
  case RESET:
    return { count: 0 }
  case DECREMENT:
    return { count: state.count - 1 }
    
  default:
    throw new Error();
}
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => {
        dispatch({type: INCREMENT})
      }}>Increment</button>
      <button onClick={() => {
        dispatch({type: RESET})
      }}>Reset</button>
      <button onClick={() => {
        dispatch({type: DECREMENT})
      }}>Decrement</button>

    </>
  )
}

export default Counter;

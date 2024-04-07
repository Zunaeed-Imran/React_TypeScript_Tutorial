import  { useReducer } from 'react'


const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const RESET = "RESET";
const DECREMENT = "DECREMENT";

type IncrementType = { type: typeof INCREMENT };
type IncrementByAmountType = {type: typeof INCREMENTBYAMOUNT, payload: number}
type ResetType = { type: typeof RESET};
type DecrementType = { type: typeof DECREMENT};

type CounterActionType = IncrementType | DecrementType | ResetType | IncrementByAmountType;

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
  case INCREMENTBYAMOUNT:
    return { count: state.count + action.payload}
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
      <button onClick={() => {
        dispatch({ type: INCREMENTBYAMOUNT, payload: 5})
      }}>Increment By Amount</button>

    </>
  )
}

export default Counter;

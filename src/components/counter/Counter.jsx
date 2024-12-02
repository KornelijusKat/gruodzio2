/*import CounterButton from "../counterButton/CounterButton";
import CounterDisplay from "../counterDisplay/CounterDisplay";
import { initialState, reducer } from "../../reducer";
import { useReducer } from "react";
const Counter = () =>{
    const [state, dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <CounterDisplay count={state.count}/>
            <CounterButton
                onClick={()=>{dispatch({type:'increment'})}}
                label="Increment"
            />
               <CounterButton
                onClick={()=>{dispatch({type:'decrement'})}}
                label="Decrement"
            />
               <CounterButton
                onClick={()=>{dispatch({type:'reset'})}}
                label="Reset"
            />
        </div>
    )
}
export default Counter;*/
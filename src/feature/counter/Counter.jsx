import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy3, reset } from "./counterSlice";


const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Counter</p>
            <p>Count : {count}</p>
            <button onClick={()=>{dispatch(increment())}}>increment</button>
            <button onClick={()=>{dispatch(decrement())}}>decrement</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
            <button onClick={()=>{dispatch(incrementBy3(3))}}>incrementBy3</button>
        </div>
    );
};

export default Counter;
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter1Slice";

const Counter1 = () => {
    const count = useSelector(state => state.counter1.count1);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                Count : {count}
            </h1>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter1;
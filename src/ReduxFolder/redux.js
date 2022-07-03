import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from "./actions"

function Redux() {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    const dispatch = useDispatch();


    return (

      //StateLearning()

    <div className='App'>
        <h1>Counter {counter} </h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {isLogged ? <h3>Valuable Information  I Shouldn't see</h3> : ""}
    </div>
    );
}

export default Redux;
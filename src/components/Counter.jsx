import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counters/counterSlice";

const Counter = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch()

  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(increment())
  };
  const handleDecrement = () => {
    setCount(count - 1);
    dispatch(decrement())
    
  };
  return (
    <div className="flex justify-center text-center shadow-lg py-8 rounded-lg my-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl">{count}</h1>
        </div>
        <div>
          <button onClick={handleIncrement} className="uppercase mx-2 px-4 py-2 bg-blue-500 rounded-md text-white font-semibold">
            Increment
          </button>
          <button onClick={handleDecrement} className="uppercase mx-2 px-4 py-2 bg-red-500 rounded-md text-white font-semibold">
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

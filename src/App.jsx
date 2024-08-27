import { useState } from "react";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";

function App() {

  const incrementTotal = () =>{
    setTotalCount(totalCount + 1);
  }
  const decrementTotal = () => {
    setTotalCount(totalCount - 1);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div>
          <h1 className="text-5xl font-semibold my-2">
            Simple Counter Application
          </h1>
          <hr />
        </div>
        <Counter incrementTotal={incrementTotal} decrementTotal={decrementTotal}/>
        <Counter incrementTotal={incrementTotal} decrementTotal={decrementTotal}/>
        <TotalCount/>
      </div>
    </div>
  );
}

export default App;

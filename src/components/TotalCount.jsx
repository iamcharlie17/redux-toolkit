import { useSelector } from "react-redux";

const TotalCount = () => {
    const totalCount = useSelector((state) => state.counter.totalCount);
    return (
        <div className="flex justify-center text-center shadow-lg py-8 rounded-lg my-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl">Total: {totalCount}</h1>
          </div>
        </div>
      </div>
    );
};

export default TotalCount;
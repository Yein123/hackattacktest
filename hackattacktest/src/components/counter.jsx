import React,{ useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex mx-auto space-x-8 items-center">
            <button 
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-blue-700 text-white h-8 w-20 hover:bg-blue-500"
            > 
                Increment
            </button>
            <p>{count}</p>
        </div>
    );
}

export default Counter; 
'use client';

import { useState } from 'react'

export const CardCounter = () => {
  const [counterValue, setCounterValue] = useState(0);  

  return (
    <>
      <span className="text-9xl mb-2"> {counterValue} </span>

      <div className="flex">
        <button 
          onClick={() => setCounterValue(counterValue - 1)}
          disabled={counterValue === 0}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>

        <button 
          onClick={() => setCounterValue(counterValue +  1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  )
}

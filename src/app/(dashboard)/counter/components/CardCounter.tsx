'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/global/store';
import { decrement, increment, initialize } from '@/global/store/counter';

const getApiCounter = async () => {
  const data = await fetch(`/api/counter`, {
    method: 'GET',
  }).then((res) => res.json());

  return data.count;
}

export const CardCounter = ({ defaultValue = 0 }) => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  useEffect(() => {
    getApiCounter()
      .then(({ value }) => dispatch(initialize(value)))
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl mb-2"> {value} </span>

      <div className="flex">
        <button 
          onClick={() => dispatch(decrement())}
          disabled={value === 0}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>

        <button 
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
       
      <div className="flex mt-5">
        <button 
          onClick={() => dispatch(decrement())}
          disabled={value === 0}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -2
        </button>

        <button 
          onClick={() => dispatch(decrement())}
          disabled={value === 0}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          Set 0
        </button>

        <button 
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +2
        </button>
      </div>
    </>
  )
}

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
    value: 0,
    isReady: false,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    initialize: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.value = action.payload;
      state.isReady = true;
    },

    reset: (state) => {
      state.value = 0
    },

    increment: (state) => {
      state.value ++
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    decrement: (state) => {
      if (state.value - 1 < 0) return
      state.value --
    },
  },
})

export const { increment, decrement, incrementByAmount, reset, initialize } = counterSlice.actions

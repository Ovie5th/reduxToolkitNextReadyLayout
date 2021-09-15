
import { configureStore, Store } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
interface IinitialState{
    count:number
}
const initialState:IinitialState={
    count:0
}
const counterReducer=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state,action){
           state.count++
    }
    }
})
export const {increment}=counterReducer.actions
const RootReducer=combineReducers({
    count:counterReducer.reducer
})
export const makeStore = (context: Context):Store => configureStore({
    reducer:RootReducer            
})

  export type RootState = ReturnType<typeof RootReducer>
  export type AppDispatch = typeof RootReducer
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});
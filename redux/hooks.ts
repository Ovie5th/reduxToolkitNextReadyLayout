import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './';
export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState, AppDisptach } from "../store/store";

// using dispatch is for doing an action from slice
// this mainly is for not to pass its type anymore when using dispatch
export const useAppDispatch: () => AppDisptach = useDispatch;
// same goes heree
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice  from '../auth/auth.slice';
import projectsSlice  from '../projects/projects.slice';
import documentSlice from "../documents/document.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import commonSlice from '../common/common.slice';
import materialSelectionSlice from '../materialSelection/materialSelection.slice';

export const store = configureStore({
  // Export all reducers
  reducer: {
    login: authSlice,
    document: documentSlice,
    common : commonSlice,
    projects: projectsSlice,
    materialSelection:materialSelectionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

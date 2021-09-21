import { CaseReducer, createSlice } from '@reduxjs/toolkit';

export type CustomCursorState = {
  isNavbarOpen: boolean;
};

const initialNavbarState: CustomCursorState = {
  isNavbarOpen: false,
};

const openNavbar: CaseReducer<CustomCursorState> = (state) => {
  state.isNavbarOpen = true;
};

const closeNavbar: CaseReducer<CustomCursorState> = (state) => {
  state.isNavbarOpen = false;
};

const navbarSlice = createSlice({
  name: 'navbarStatus',
  initialState: initialNavbarState,
  reducers: {
    openNavbar,
    closeNavbar,
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;

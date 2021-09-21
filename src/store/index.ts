import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './navbar';

export type RootState = {
  navbar: {
    isNavbarOpen: boolean;
  };
};

const store = configureStore({
  reducer: { navbar: navbarReducer },
});

export default store;

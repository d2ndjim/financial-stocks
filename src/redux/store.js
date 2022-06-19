import { configureStore } from '@reduxjs/toolkit/';

import searchReducer from './search/searchSlice';
import companyReducer from './stocks/companySlice';
import profileReducer from './stocks/profileSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    company: companyReducer,
    profile: profileReducer,
  },
});

export default store;

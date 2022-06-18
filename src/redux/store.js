import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

import searchReducer from './search/searchSlice'
import companyReducer from './stocks/companySlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    company: companyReducer,
  },
});

export default store
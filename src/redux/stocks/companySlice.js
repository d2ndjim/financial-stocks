import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice';

const URL = 'https://financialmodelingprep.com/api/v3/actives?apikey=0df017d8fea3563b39ea876e803586c5';

export const loadCompanies = createAsyncThunk(
  'stock/loadCompanies', async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  },
);

const options = {
  name: 'company',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadCompanies.fulfilled]: (state, action) => action.payload,
  },
};

const companySlice = createSlice(options);
export const selectCompany = (state) => state.company;

export const selectFilteredCompany = (state) => {
  const allCompanies = selectCompany(state);
  const searchTerm = selectSearchTerm(state);

  return allCompanies.filter((company) => company.companyName.toLowerCase()
    .includes(searchTerm.toLowerCase()));
};

export default companySlice.reducer;

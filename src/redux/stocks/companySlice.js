import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice';

const URL = 'https://financialmodelingprep.com/api/v3/actives?apikey=8e838d336e289935c357eb945be96f5a';

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

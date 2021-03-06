import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadProfile = createAsyncThunk(
  'profile/loadProfile', async (ticker) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=8e838d336e289935c357eb945be96f5a`,
    );
    const data = await response.json();
    const profile = data.map((profile) => ({
      name: profile.companyName,
      symbol: profile.symbol,
      marketCap: profile.mktCap,
      price: profile.price,
      industry: profile.industry,
      website: profile.website,
      description: profile.description,
      ceo: profile.ceo,
      sector: profile.sector,
      country: profile.country,
      img: profile.image,
    }));
    return profile;
  },
);

const options = {
  name: 'profile',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadProfile.fulfilled]: (state, action) => action.payload,
  },
};

const profileSlice = createSlice(options);
export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;

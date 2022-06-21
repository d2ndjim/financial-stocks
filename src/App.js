import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { loadCompanies } from './redux/stocks/companySlice';
import Companies from './features/company/company';
import Profile from './features/profile/profile';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCompanies());
  }, [dispatch]);

  return (
    <div className="bg-[#4369B2]">
      <Routes>
        <Route index path="/" element={<Companies />} />
        <Route path="/profiles/:ticker" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

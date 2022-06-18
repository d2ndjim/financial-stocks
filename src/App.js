import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { loadCompanies } from './redux/stocks/companySlice';
import Companies from './features/company/company';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCompanies());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Companies />} />
      </Routes>
    </div>
  );
}

export default App;

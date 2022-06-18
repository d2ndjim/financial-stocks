import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredCompany } from '../redux/stocks/companySlice';

const Company = () => {
  const companies = useSelector(selectFilteredCompany);
  return (
    <>
      {companies.map((company) => (
        <div key={company.ticker}>
          <p>{company.companyName}</p>
          <p>{company.ticker}</p>
          <p>{company.changes}</p>
          <p>{company.price}</p>
          <p>{company.changesPercentage}</p>
        </div>
      ))}
      <div />
    </>
  );
};

export default Company;

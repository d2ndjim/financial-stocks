import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilteredCompany } from '../redux/stocks/companySlice';

const Company = () => {
  const companies = useSelector(selectFilteredCompany);
  return (
    <>
      <div className="grid gap-4 grid-cols-3 w-4/5 m-auto">
        {companies.map((company) => (
          <Link to={`/details/${company.ticker}`} key={company.ticker}>
            <div>
              <p>{company.companyName}</p>
              <p>{company.ticker}</p>
              <p>{company.changes}</p>
              <p>{company.price}</p>
              <p>{company.changesPercentage}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Company;

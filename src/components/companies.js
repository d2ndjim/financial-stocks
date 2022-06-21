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
          <Link to={`/profiles/${company.ticker}`} key={company.ticker}>
            <div className="bg-[#2D4573] p-10 text-white font-bold h-full rounded-lg hover:scale-95">
              <p className="font-bold italic text-base">
                {company.companyName}
              </p>
              <p className="text-sm text-slate-400">{company.ticker}</p>
              <p className="text-[#6AC66B]">{Number(company.changes).toFixed(2)}</p>
              <p>
                $
                {company.price}
              </p>
              <h1 className="animate-ping rounded-full opacity-95 absolute inline-flex text-sky-400">
                #
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Company;

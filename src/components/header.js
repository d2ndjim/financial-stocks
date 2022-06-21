import React from 'react';

const headerImg = 'https://businesspost.ng/wp-content/uploads/2021/05/Financial-Stocks.jpg';

const Header = () => (
  <>
    <div className="header flex justify-start p-1 italic bg-[#2D4573] w-full">
      <img className="header-img" src={headerImg} alt="header-img" />
      <h1 className="font-bold text-3xl text-white md:font-bold md:text-5xl md:text-white ">Financial Stocks</h1>
    </div>
  </>
);

export default Header;

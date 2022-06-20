import React from 'react';

const headerImg = 'https://businesspost.ng/wp-content/uploads/2021/05/Financial-Stocks.jpg';

const Header = () => (
  <>
    <div className="flex justify-start p-1 italic bg-[#2D4573]">
      <img className="header-img" src={headerImg} alt="header-img" />
      <h1 className="font-bold text-5xl text-white">Financial Stocks</h1>
    </div>
  </>
);

export default Header;

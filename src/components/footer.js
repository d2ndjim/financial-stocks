import React from 'react';

const Footer = () => (
  <>
    <footer className="text-white">
      <h2 className="footer ml-6 font-bold">
        {`© ${new Date().getFullYear()} All rights reserved.`}
      </h2>
      <div className="mr-6 grid grid-cols-3 gap-x-2.5">
        <a
          className="hover:text-sky-400"
          href="https://github.com/d2ndjim/financial-stocks"
        >
          Source
        </a>
        <a
          className="hover:text-sky-400"
          href="https://site.financialmodelingprep.com/developer/docs/"
        >
          API
        </a>
        <a
          className="hover:text-sky-400"
          href="https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)"
        >
          Design
        </a>
      </div>
    </footer>
  </>
);

export default Footer;

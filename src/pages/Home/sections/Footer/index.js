/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="donation">
        <p>Donate here:</p>
        <a href="https://kangaroosanctuary.com/donate/">https://kangaroosanctuary.com/donate/</a>
      </div>
      <div className="icons">
        <a href="https://twitter.com/kangkultureNFT">
          <div className="icon">
            <img src="/media/images/twitter.png" alt="twitter icon" />
          </div>
        </a>
        <a href="mailto:info@kangarookulture.io">
          <div className="icon">
            <img src="/media/images/email.png" alt="email icon" />
          </div>
        </a>
        <a href="">
          <div className="icon">
            <img src="/media/images/opensea.png" alt="opensea icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;

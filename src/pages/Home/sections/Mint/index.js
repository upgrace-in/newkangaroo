/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Script from 'next/script';

const Mint = () => {
  const [count, setcount] = useState(0);
  const limit = 1006;
  return (
    <div className="mint" style={{cursor:'pointer'}}>
      <>
        <Script
          strategy="beforeInteractive"
          src="https://code.jquery.com/jquery-3.6.0.js"
          onLoad={() => console.log("jQuery is Loaded...")}
        />
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/web3@latest/dist/web3.min.js"
          onLoad={() => console.log("WEB3.js is Loaded...")}
        />
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/web3modal"
          onLoad={() => console.log("WEB3Modal is Loaded...")}
        />

        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/@walletconnect/web3-provider"
          onLoad={() => console.log("WEB3Provider is Loaded...")}
        />

        <Script
          strategy="lazyOnload"
          src="js/integration.js"
          onLoad={() => console.log("integration.js is Loaded...")}
        />
      </>
      <div className="abs">
        <button className="connectBTN connect2">CONNECT</button> 
        <button style={{"display":'none'}} id="mint">MINT</button>
      </div>
      {/* <img src="/media/images/mint.png" alt="mint-bg" /> */}
      {/* <h1>
        {count}/{limit}
      </h1> */}
      <h1 id="mintCount">1</h1>
      <div id="decrease_btn" className="btn btn-minus">
        <p>-</p>
      </div>
      <div id="increase_btn" className="btn btn-plus">
        <p>+</p>
      </div>
      <div className="branch">
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
      </div>
    </div>
  );
};

export default Mint;

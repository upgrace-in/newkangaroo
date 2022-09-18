/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    function onClickLink(e) {
      e.preventDefault();

      const hrefEl = document.querySelector(this.getAttribute("href"));

      hrefEl &&
        hrefEl.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", onClickLink);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", onClickLink);
      });
    };
  }, []);

  return (
    <div className="landing">
      {/* <img src="/media/images/home.png" alt="home-bg" /> */}
      <div className="actions">
        <div className="link">
          <a href="#about">About Us</a>
        </div>
        <div className="link">
          <a href="#mint">Mint</a>
        </div>
        <div className="link">
          <a href="#roadmap">RoadMap</a>
        </div>
        <div className="link">
          <a href="#faq">FAQs</a>
        </div>
        <div className="btn connectBTN">
          <p>Connect Wallet</p>
        </div>
      </div>
      <div className="branch">
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
      </div>
    </div>
  );
};

export default Landing;

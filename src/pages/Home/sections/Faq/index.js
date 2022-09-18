/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const data = [
  {
    id: 1,
    que: "Will there be a Whitelist?",
    ans: `No. However our bigger future project we have planned will contain a Whitelist and all Kangaroo Kulture NFT holders at that current time, will have automatic Whitelist as well as consistent special giveaways and competitions. All our giveaways are completely fair and random. Please follow us for future announcements.`,
  },
  {
    id: 2,
    que: "How much will a Kangaroo Kulture NFT cost?",
    ans: "0.056 ETH",
  },
  {
    id: 3,
    que: "How many Kangaroo Kulture NFT's will exist?",
    ans: `1006 will exist. 6 being super rare. We are already working with real life animal sanctuary's to grow a bigger project in the future. All current Kangaroo Kulture NFT holders at that time will benefit massively`,
  },
  {
    id: 4,
    que: "Are there secondary sale royalties?",
    ans: "Yes 2% royalties were added and will be distributed amongst our donated animal charities",
  },
  {
    id: 5,
    que: "What is the maximum mint amount per holder?",
    ans: `We haven't capped this. We are running this as a first come, first serve basis. Whoever gets in first, will reap the benefits. We figure, if you buy into us and believe in our ambition too then you will be rewarded. Simple !`,
  },
  {
    id: 6,
    que: "When will winners receive an ETH drop?",
    ans: "As soon as we hit the minting targets described on the roadmap, we will payout within 24 hours. All winners are totally at random. Please check Twitter announcements",
  },
  {
    id: 7,
    que: "Do you have a social media following?",
    ans: "We are organically growing our followers. We dont pay for false backing or clout",
  },
];

const Dropdown = (props) => {
  const { open, setopen, que, ans, id } = props;
  return (
    <div className="dropdown">
      <div
        className="que"
        onClick={() => {
          if (id === open) {
            setopen(null);
          } else {
            setopen(id);
          }
        }}
      >
        <p>
          <span>Q: </span>
          {que}
        </p>
        <i className={`fa-solid fa-caret-up ${id === open ? "rotate" : ""}`}></i>
      </div>
      {open === id && (
        <div className="ans">
          <p>
            <span>A: </span>
            {ans}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="faq" id="faq">
      <h1>Frequently asked question?</h1>
      {data.map((item) => (
        <Dropdown key={item.id} open={open} setopen={setopen} que={item.que} ans={item.ans} id={item.id} />
      ))}

      <div className="branch">
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
        <img src="/media/images/branch.png" alt="branch" />
      </div>
    </div>
  );
};

export default Faq;

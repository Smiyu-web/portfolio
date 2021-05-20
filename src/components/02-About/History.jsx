import React from "react";

const History = () => {
  return (
    <div className="flex flex-col px-4">
      <ul data-aos="fade-up" data-aos-delay="100">
        <li className="history_date">2015 - 2016</li>
        <li className="history_text">
          Diploma Forum for International Trading Training
        </li>
      </ul>
      <ul data-aos="fade-up" data-aos-delay="200">
        <li className="history_date">2016 - 2020</li>
        <li className="history_text">
          Wholesale &amp; Reatil Buyer branches &amp; know Trading Ltd.
        </li>
      </ul>
      <ul data-aos="fade-up" data-aos-delay="300">
        <li className="history_date">2020 - Current</li>
        <li className="history_text">Studing FrontEnd Development at CICCC</li>
      </ul>
    </div>
  );
};

export default History;

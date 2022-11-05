import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function SideBar({ handleClick, order, information }) {
  const { company, duties, dates, title } = information[order];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {information.map((item, idx) => {
            return (
              <button
                key={item.id}
                onClick={() => handleClick(idx)}
                className={`job-btn ${idx === order && `active-btn`}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="jobs-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, idx) => {
            return (
              <div className="job-desc" key={idx}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

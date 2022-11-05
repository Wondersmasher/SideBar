import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Info from "./SideBar";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
// const consumerAndProvider = React.createContext()
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [information, setInformation] = useState([]);
  const [order, setOrder] = useState(0);
  async function getInfo() {
    const res = await fetch(url);
    const data = await res.json();
    setInformation(data);
    setIsLoading(false);
    console.log(data);
  }
  useEffect(() => {
    getInfo();
  }, []);
  function handleClick(idx) {
    setOrder(idx);
  }
  if (isLoading) {
    return <section className="loading">Loading...</section>;
  }
  const { id, company, duties, dates, title } = information[order];
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

export default App;

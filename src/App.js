import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
// import useFetch from "./useFetch";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [information, setInformation] = useState([]);
  const [order, setOrder] = useState(0);
  async function getInfo(url) {
    const res = await fetch(url);
    const data = await res.json();
    setInformation(data);
    setIsLoading(false);
    // console.log(data);
  }
  useEffect(() => {
    getInfo(url);
  }, [url]);
  // const { isLoading, information, order, setOrder } = useFetch(url);
  function handleClick(idx) {
    setOrder(idx);
  }
  if (isLoading) {
    return <section className="loading">Loading...</section>;
  }
  return (
    <SideBar
      handleClick={handleClick}
      information={information}
      order={order}
    />
  );
}

export default App;

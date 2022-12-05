import React, {useEffect, useState} from "react";
import NavBar from "./NavBar"
import ShowContainer from "./ShowContainer"

function App() {

  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(res=>res.json())
      .then(data => setShows(data))
  },[])

  const firstTenShows = shows.splice(0, 10)
  console.log(firstTenShows)

  return (
    <div className="App">
      <h1>TV SHOW FINDER</h1>
      <NavBar />
      <ShowContainer firstTenShows={firstTenShows}/>
    </div>
  );
}

export default App;

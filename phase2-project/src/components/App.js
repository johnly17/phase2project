import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import ShowContainer from "./ShowContainer"
import WatchLater from "./WatchLater"
import SearchPage from "./SearchPage";
import { Route, Switch } from 'react-router-dom';
import Search from "./Search";

function App() {

  const [shows, setShows] = useState([])
  const [search, setSearch] = useState(" ") 

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(res => res.json())
      .then(data => setShows(data))
  }, [])

  const trendTenShows = shows.splice(0, 10)

  const filteredOtherShows = shows.filter(show => {
    return show.name.toLowerCase().includes(search.toLowerCase())
  })

  console.log(filteredOtherShows)

  // function onSearchChange(e){
  //   setSearch(e.target.value)
  // }


  return (
    <div className="App">
      <h1>TV SHOW FINDER</h1>
      <Search search={search} setSearch={setSearch} />
      <NavBar />

      <ShowContainer trendTenShows={trendTenShows} shows={filteredOtherShows} />

    </div >
  );
}

export default App;

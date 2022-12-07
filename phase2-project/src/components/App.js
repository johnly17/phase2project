import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import ShowContainer from "./ShowContainer"
import WatchLater from "./WatchLater"
import SearchPage from "./SearchPage";
import { Route, Switch } from 'react-router-dom';
import ShowDetail from "./ShowDetail";

function App() {

  const [shows, setShows] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setShows(data))
  }, [])

  const filteredOtherShows = shows.filter(show => {
    return show.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <NavBar />
      <Switch >

        <Route exact path="/">
          <ShowContainer shows={shows}/>
        </Route>

        <Route path="/search">
          <SearchPage
            search={search}
            setSearch={setSearch}
            shows={filteredOtherShows}
          />
        </Route>

        <Route path="/show/:id">
          <ShowDetail shows={shows}/>
        </Route>

        <Route exact path="/watchlist">
          <WatchLater />
        </Route>

      </Switch>

    </div >
  );
}

export default App;

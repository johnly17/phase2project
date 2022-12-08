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
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.tvmaze.com/shows?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setShows(data)
        setIsLoading(false)
      })
  }, [])

  const filteredOtherShows = shows.filter(show => {
    return show.name.toLowerCase().includes(search.toLowerCase()) 
  })

  return (
    <div className="App">
      <NavBar />
      <Switch >

        <Route exact path="/">
          <ShowContainer shows={shows} setPage={setPage} page={page} isLoading={isLoading}/>
        </Route>

        <Route path="/search">
          <SearchPage
            search={search}
            setSearch={setSearch}
            shows={filteredOtherShows}
          />
        </Route>

        <Route  path="/show/:id">
          <ShowDetail shows={shows}/>
        </Route>

        <Route  path="/watchlist">
          <WatchLater />
        </Route>

      </Switch>

    </div >
  );
}

export default App;

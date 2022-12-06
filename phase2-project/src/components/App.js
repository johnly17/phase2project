import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import ShowContainer from "./ShowContainer"
import WatchLater from "./WatchLater"
import SearchPage from "./SearchPage";
import { Route, Switch } from 'react-router-dom';


function App() {

  const [shows, setShows] = useState([])
  const [search, setSearch] = useState("")
  console.log(shows)


  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(res => res.json())
      .then(data => setShows(data))
  }, [])

  const filteredOtherShows = shows.filter(show => {
    return show.name.toLowerCase().includes(search.toLowerCase())
  })


  // function onSearchChange(e){
  //   setSearch(e.target.value)
  // }


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



      </Switch>

    </div >
  );
}

export default App;


function Search({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <h2>Search a Show:</h2> 
            <input 
            type="text" 
 
            value={search}
            onChange={handleSearch}
            />
        </div>
    )

}

export default Search


function Search({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <input 
            type="text" 
            placeholder="Search for a TV Show..." 
            value={search}
            onChange={handleSearch}
            />
        </div>
    )

}

export default Search


function Search({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <h2>Find a Show!</h2>
            <input 
            type="text" 
            placeholder=" Search..."
            value={search}
            onChange={handleSearch}
            />
            
        </div>
    )

}

export default Search

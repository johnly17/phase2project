import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navBar">
            <div className="title">
                <NavLink to="/" >
                    <h1>TV SHOW FINDER</h1>
                </NavLink>
            </div>
            <div className='routes'>
                <NavLink to="/" className="button">
                    <h1>Home</h1>
                </NavLink>
                <NavLink exact to="/search" className="button">
                    <h1>Search Shows!</h1>
                </NavLink>
                <NavLink exact to="/watchlist" className='button'>
                    <h1>Watch List!</h1>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;

import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navBar">
            <div className="title">
                <Link to="/" >
                    <h1>TV SHOW FINDER</h1>
                </Link>
            </div>
            <div className='routes'>
                <Link to="/" className="button">
                    <h1>Home</h1>
                </Link>
                <Link exact to="/search" className="button">
                    <h1>Search Shows!</h1>
                </Link>
                <Link exact to="watchlist" className='button'>
                    <h1>Watch List!</h1>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;

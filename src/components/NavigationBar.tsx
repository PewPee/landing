import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <header className="nav-wrapper">
            <div className="container nav">
                <Link to='/'>
                    <img className="main-logo" src="./assets/img/logo.svg" alt="PewPee logo" draggable="false" />
                </Link>
                <div className="nav-links">
                    <a href="https://twitter.com/PewPeeMusic" target="_blank" rel="noreferrer">Twitter</a>
                    {/* <a href="">Login</a> */}
                </div>
            </div>
        </header>
    )
}
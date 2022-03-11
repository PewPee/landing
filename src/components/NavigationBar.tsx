export default function NavigationBar() {
    return (
        <header className="nav-wrapper">
            <div className="nav">
                <img className="main-logo" src="./assets/img/logo.svg" alt="PewPee logo" draggable="false" />
                <div className="nav-links">
                    <a href="https://twitter.com/PewPeeMusic" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="">Login</a>
                </div>
            </div>
        </header>
    )
}
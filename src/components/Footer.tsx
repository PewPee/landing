export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer">
                <div className="footer-column footer-column-logo">
                    <img className="main-logo" src="./assets/img/logo.svg" alt="PewPee logo" draggable="false" />
                    <a className="copyright" href="https://t.me/taiakindaniel" rel="nofollow" target="_blank">© Daniel Taiakin</a>
                </div>
                <div className="footer-column">
                    <h5>About</h5>
                    <ul>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Apps</h5>
                    <ul>
                        <li>iPhone/iPad</li>
                        <li>Web</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Legal</h5>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Social</h5>
                    <ul>
                        <li><a href="https://t.me/pewpee_music" rel="nofollow" target="_blank">Telegram</a></li>
                        <li><a href="https://twitter.com/PewPeeMusic">Twitter</a></li>
                        <li><a href="https://www.instagram.com/pewpee.music" rel="nofollow" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
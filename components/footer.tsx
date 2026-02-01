import Link from 'next/link'
import Image from 'next/image'
import fooStyles from './footer.module.css'

import logo from '../public/img/logo.svg'

const APP_STORE_URL = "https://apps.apple.com/us/app/pewpee-music-player-offline/id1483338834"

export default function Footer() {
  return (
    <footer className={fooStyles.footerWrapper}>
      <div className={`container ${fooStyles.footer}`}>
        <div className={fooStyles.footerColumn+" "+fooStyles.footerColumnLogo}>
          <Image src={logo} width={142} height={41} alt="PewPee logo" draggable="false" />
          <a className={fooStyles.copyright} href="https://x.com/taiakindaniel" rel="noopener noreferrer nofollow" target="_blank">© Daniel Taiakin</a>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>About</h5>
          <ul>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Apps</h5>
          <ul>
            <li><a href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">iPhone/iPad</a></li>
            <li><a href="/en/login" target="_blank">Web Player</a></li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Legal</h5>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Social</h5>
          <ul>
            <li><a href="https://t.me/pewpee_music" rel="noopener noreferrer nofollow" target="_blank">Telegram</a></li>
            <li><a href="https://twitter.com/PewPeeMusic" rel="noopener noreferrer nofollow" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/pewpee.music" rel="noopener noreferrer nofollow" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={fooStyles.footerMobile}>
        {/* <div className={fooStyles.footerColumn}>
            <h5>FAQ</h5>
        </div> */}
        <div className={fooStyles.footerColumn}>
          <h5><a href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">Download</a></h5>
        </div>
        {/* <div className={fooStyles.footerColumn}>
          <h5>Blog</h5>
        </div> */}
        <div className={fooStyles.footerColumn}>
          <h5><a href="https://twitter.com/PewPeeMusic" rel="noopener noreferrer nofollow" target="_blank">Twitter</a></h5>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5><Link href="/contact-us">Contact Us</Link></h5>
        </div>
      </div>
    </footer>
  )
}
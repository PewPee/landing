import Link from 'next/link'
import Image from 'next/image'
import fooStyles from './footer.module.css'

import logo from '../public/img/logo.svg'

export default function Footer() {
  return (
    <footer className={fooStyles.footerWrapper}>
      <div className={`container ${fooStyles.footer}`}>
        <div className={fooStyles.footerColumn+" "+fooStyles.footerColumnLogo}>
          <Image src={logo} width={142} height={41} alt="PewPee logo" draggable="false" />
          <a className={fooStyles.copyright} href="https://t.me/taiakindaniel" rel="nofollow noreferrer" target="_blank">© Daniel Taiakin</a>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>About</h5>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Apps</h5>
          <ul>
            <li>iPhone/iPad</li>
            <li>Web</li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Legal</h5>
          <ul>
            <li><Link href='/privacy'>Privacy Policy</Link></li>
            <li><Link href='/terms'>Terms of Use</Link></li>
          </ul>
        </div>
        <div className={fooStyles.footerColumn}>
          <h5>Social</h5>
          <ul>
            <li><a href="https://t.me/pewpee_music" rel="nofollow noreferrer" target="_blank">Telegram</a></li>
            <li><a href="https://twitter.com/PewPeeMusic" rel="nofollow noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/pewpee.music" rel="nofollow noreferrer" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={fooStyles.footerMobile}>
        <div className={fooStyles.footerColumn}>
            <h5>FAQ</h5>
        </div>
        <div className={fooStyles.footerColumn}>
            <h5>Download</h5>
        </div>
        <div className={fooStyles.footerColumn}>
            <h5>Blog</h5>
        </div>
        <div className={fooStyles.footerColumn}>
            <h5>Twitter</h5>
        </div>
      </div>
    </footer>
  )
}
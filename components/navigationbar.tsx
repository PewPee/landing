import Link from 'next/link'
import Image from 'next/image'
import barStyles from './navigationbar.module.css'

import logo from '../public/img/logo.svg'

import Marquee from 'react-fast-marquee'

export default function NavigationBar() {
  return (
    <div>
      <Marquee style={{height: "30px", background: "linear-gradient(to right, #ff00cc, #333399)"}} gradient={false}>
        {[...Array(10)].map((_, i) =>
          <span key={i} style={{marginRight: "100px"}}>#PewPeeEncored 2022 Coming Soon</span>
        )}
      </Marquee>
      <header className={barStyles.navWrapper}>
        <div className={`container ${barStyles.nav}`}>
          <Link href="/">
            <a href="/"><Image src={logo} width={111} height={32} alt="PewPee logo" draggable="false" /></a>
          </Link>
          <div className={barStyles.navLinks}>
              <a href="https://twitter.com/PewPeeMusic" target="_blank" rel="noreferrer">Twitter</a>
              {/* <a href="">Login</a> */}
          </div>
        </div>
      </header>
    </div>
  )
}
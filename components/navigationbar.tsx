import Link from 'next/link'
import Image from 'next/image'
import barStyles from './navigationbar.module.css'

import logo from '../public/img/logo.svg'

export default function NavigationBar() {
  return (
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
  )
}
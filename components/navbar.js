import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        Antonin Spontak
      </div>
      <Link href="/">
        <a>RECENT</a>
      </Link>

      <div>
        THEMES
      </div>
      <Link href="/">
        <a>I - Montagne</a>
      </Link>

      <Link href="/">
        <a>II - Temps</a>
      </Link>


      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
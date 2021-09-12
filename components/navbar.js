import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.title}>Antonin Spontak</a>
      </Link>

      <Link href="/">
        <a>RECENT</a>
      </Link>

      <Link href="/">
        <a>I - Montagne</a>
      </Link>

      <Link href="/">
        <a>II - Portraits</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
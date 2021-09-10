import Navbar from './navbar'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  )
}
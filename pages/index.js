import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LinkedIn Clone</title>
        <meta name="description" content="Created by maniwebdev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar />
      <div class="wrapper">
        <div class="left-sidebar">
           this is left
        </div>
        <div class="main-content">
          this is middle
        </div>
        <div class="right-sidebar">
        this is right
        </div>
    </div>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

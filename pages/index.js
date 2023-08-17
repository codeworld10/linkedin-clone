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
        <div className="wrapper">
          <div className="left-sidebar">
            <div>
              <Image className='left-sidebar-top-image' src="/images/cover.png" height="50" width="300" alt='maniwebdev' />
              <div className='center-profile-image'>
                <Image className='left-sidebar-profile-image' src="/images/usm.jpg" height="70" width="70" alt='maniwebdev' />
              </div>
              <div>
                <h1 className='user-name'>Muhammad Usman</h1>
                <p className='user-bio'>👩‍💻 Web/App Developer | 🚀 Helping Small Businesses Grow Online</p>
              </div>
            </div>
          </div>
          <div className="main-content">
            this is middle
          </div>
          <div className="right-sidebar">
            this is right
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MdInsertPhoto } from 'react-icons/md'
import { RiVideoFill } from 'react-icons/ri'
import { HiPaintBrush } from 'react-icons/hi2'
import { RiArticleFill } from 'react-icons/ri'

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
              <Image className='left-sidebar-top-image' src="/images/cover.png" height="50" width="250" alt='maniwebdev' />
              <div className='center-profile-image'>
                <Image className='left-sidebar-profile-image' src="/images/usm.jpg" height="70" width="70" alt='maniwebdev' />
              </div>
              <div>
                <h1 className='user-name'>Muhammad Usman</h1>
                <p className='user-bio'>👩‍💻 Web/App Developer | 🚀 Helping Small Businesses Grow Online</p>
              </div>
            </div>
            <div className='card-border-line'>
              <div className='horizontal-views-stats'>
                <p>Profile Viewers</p>
                <p>181</p>
              </div>
              <div className='horizontal-post-stats'>
                <p>Post impression</p>
                <p>181</p>
              </div>
            </div>
            <div className='sales-bottom-border'>
              <p>Access exclusive tools & insights</p>
              <p>Try sales navigator</p>
            </div>
            <div className='horizontol-myitems'>
              <BsFillBookmarkFill size={25} />
              <p className='item-text'>My Items</p>
            </div>
          </div>
          <div className="main-content">
            <div className='main-post-card'>
              <div className='post-card-horizontol'>
                <Image className='post-card-image' src="/images/usm.jpg" alt='maniwebdev' height='50' width='50' />
                <input className='post-card-input' type='text' placeholder='Start a post' />
              </div>
              <div className='horizontol-post-options'>
                <MdInsertPhoto size={25} /><p className='options-text'>Photo</p>
                <RiVideoFill size={25} /><p className='options-text'>Video</p>
                <HiPaintBrush size={25} /><p className='options-text'>Design</p>
                <RiArticleFill size={25} /><p className='options-text'>Write article</p>
              </div>
            </div>
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

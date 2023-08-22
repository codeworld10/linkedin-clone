import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { BsFillBookmarkFill, BsThreeDots, BsChatText } from 'react-icons/bs'
import { MdInsertPhoto } from 'react-icons/md'
import { RiVideoFill } from 'react-icons/ri'
import { HiPaintBrush } from 'react-icons/hi2'
import { RiArticleFill, RiSendPlaneFill } from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {FiRepeat} from 'react-icons/fi'
import { posts } from '../components/Posts'

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
                <p className='profile-views'>Profile viewers</p>
                <p className='stats'>181</p>
              </div>
              <div className='horizontal-post-stats'>
                <p className='post-impression'>Post impression</p>
                <p className='stats1'>171</p>
              </div>
            </div>
            <div className='sales-bottom-border'>
              <p className='access-text'>Access exclusive tools & insights</p>
              <p className='sales-text'>Try sales navigator</p>
            </div>
            <div className='horizontol-myitems'>
              <BsFillBookmarkFill size={15} style={{color:'grey'}}/>
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
                <MdInsertPhoto color='blue' size={25} /><p className='options-text'>Photo</p>
                <RiVideoFill color='green' size={25} /><p className='options-text'>Video</p>
                <HiPaintBrush color='purple' size={25} /><p className='options-text'>Design</p>
                <RiArticleFill color='red' size={25} /><p className='options-text'>Write article</p>
              </div>
            </div>
            {posts.map((post, index) => (
            <>
              <div key={index} className='post-card'>
          <div className='horizontal-post-image'>
          <div className='horizontal-image-name'>
          <Image className='post-user-image' src={post.userImage} alt='maniwebdev' width='50' height='50'/>
          <div>
          <p className='post-name'>{post.name}</p>
          <p className='post-bio'>{post.bio}</p>
          </div>
          </div>
          <div><BsThreeDots size={20} /></div>
          </div>
         <div className='post-description'>{post.postDescription}</div>
         <div className='post-main-image'><Image src={post.postImage} width={600} height={600} alt='maniwebdev' /></div>
          <div className='like-horizontal'>
          <div className='post-icons-horizontal'><BiLike color='grey' size={30} /> <p className='icon-text'>Like</p></div>
          <div className='post-icons-horizontal'><BsChatText color='grey' size={30} /> <p className='icon-text'>Comment</p></div>
          <div className='post-icons-horizontal'><FiRepeat color='grey' size={30} /> <p className='icon-text'>Repost</p></div>
          <div className='post-icons-horizontal'><RiSendPlaneFill color='grey' size={30} /> <p className='icon-text'>Send</p></div>
          </div>
         </div>
         </>
            ))}
          </div>
          <div className="right-sidebar">
            <div className='feed-top'>
            <p className='add-feed-text'>Add to your feed</p>
            </div>
            <div className='horizontal-feed'>
            <div>
            <Image className='feed-image' src="/images/image1.jpeg" width="50" height="50" alt='maniwebdev'/>
            </div>
            <div className='feed-space'>
            <p className='feed-name'>Alex</p>
            <p className='feed-bio'>This is bio text</p>
            <div><button className='feed-button'>+ Follow</button></div>
            </div>
            
            </div>
            <div className='horizontal-feed'>
            <div>
            <Image className='feed-image' src="/images/image2.jpeg" width="50" height="50" alt='maniwebdev'/>
            </div>
            <div className='feed-space'>
            <p className='feed-name'>Alexander</p>
            <p className='feed-bio'>This is bio text</p>
            <div><button className='feed-button'>+ Follow</button></div>
            </div>
            
            </div>
            <div className='horizontal-feed'>
            <div>
            <Image className='feed-image' src="/images/image3.jpeg" width="50" height="50" alt='maniwebdev'/>
            </div>
            <div className='feed-space'>
            <p className='feed-name'>Marco</p>
            <p className='feed-bio'>This is bio text</p>
            <div><button className='feed-button'>+ Follow</button></div>
            </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

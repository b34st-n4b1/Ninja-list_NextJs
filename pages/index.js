import Head from 'next/head'
import Image from 'next/image'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
  <div>
  
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos fuga quas quibusdam blanditiis est repudiandae aliquid atque, quis placeat.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque voluptatibus reprehenderit eos perspiciatis cumque voluptas necessitatibus, mollitia iusto porro consequuntur? Iure exercitationem reiciendis eius ipsum a nulla praesentium accusamus?</p>
        <Link href="/ninjas"><a className={styles.btn}>see all ninjas</a></Link>
            
        </div>
        </>
  )
}

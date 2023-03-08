/*eslint-disable*/
import Head from 'next/head'
import homeStyles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
        <title>Fashion hub</title>
        <meta name="description" content="Fashion store Uganda" />
      </Head>

      <div className={homeStyles.home}>
        <span  className={homeStyles.title}><span>FASHION</span><hr className={homeStyles.divider}/> HUB </span>
       <u><h1 className={homeStyles.text}>  Find your style!</h1></u> 
        <Link href="/home">Shop Now</Link>
      </div>
    </>
  )
}

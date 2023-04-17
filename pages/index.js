/*eslint-disable*/
import Head from 'next/head'
import homeStyles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={homeStyles.home}>
        <span  className={homeStyles.title}><span>TWAMBALE</span><hr className={homeStyles.divider}/>FASHION HUB </span>
       <u><h1 className={homeStyles.text}>  Find your style!</h1></u> 
        <Link href="/home">Shop Now</Link>
      </div>
    </>
  )
}

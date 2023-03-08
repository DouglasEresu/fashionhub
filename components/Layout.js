import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';
// import Header from './Header';

function Layout({children}) {
  return (
      <>
      <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
            {/* <Header/> */}
           {children}
        </main>
      
    </div>
    <Footer/>
    </>
  )
}

export default Layout

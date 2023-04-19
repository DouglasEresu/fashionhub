import styles from '../styles/Layout.module.css';
import Navigation from './Nav';
import Footer from './Footer';
// import Header from './Header';

function Layout({children}) {
  return (
      <>
      <Navigation/>
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

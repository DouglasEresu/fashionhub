import '../styles/globals.css'
import Layout from '../components/Layout'
import{Provider} from 'react-redux'
import { Analytics } from '@vercel/analytics/react';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  
  return(
    <Provider store ={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    <Analytics/>
    
    </Provider>
  ) 
}

export default MyApp

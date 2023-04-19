import '../styles/globals.css'
import Layout from '../components/Layout'
import{Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from '../redux/store'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  
  return(
    <Provider store ={store}>
      
        <Layout>
           <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
    </Layout>
     
      
    
    </Provider>
  ) 
}

export default MyApp

import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {GoogleOAuthProvider} from "@react-oauth/google"
import "../styles/homepage.css"
import "../styles/Carouselscard.css"
import "../styles/cartproduct.css"  
import "../styles/Carouseltwo.css"

import {Provider} from 'react-redux'

import { store } from '@/store/store'

export default function App({ Component, pageProps }) {
    return <>
        <GoogleOAuthProvider clientId="122806122719-hsoe2eocu4ilnidqk645ui83d5fiaus8.apps.googleusercontent.com">
            <ChakraProvider>
                <Navbar />
                
  <Provider store={store}>

                    <Component {...pageProps} />
                    </Provider>
                <Footer/>
        </ChakraProvider>
        </GoogleOAuthProvider>
  </>
  
  
}
//workin
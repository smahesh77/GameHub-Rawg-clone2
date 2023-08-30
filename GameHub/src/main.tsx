import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> {/*set the theme to the one we set earlier */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/> {/* you can just give 'dark' instead and itll have the same effect we are basically returning dark */}
    <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)

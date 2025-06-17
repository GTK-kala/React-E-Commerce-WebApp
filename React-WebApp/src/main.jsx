import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <StrictMode>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </StrictMode>,
  </BrowserRouter>

)

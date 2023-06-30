import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Component1 from './components/Component1.tsx'
import './index.css'
import Component2 from './components/Component2.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Component1/>
    <Component2/>
    <Footer/>
  </React.StrictMode>,
)

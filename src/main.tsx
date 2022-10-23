import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tippy.js/dist/tippy.css';
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id='main-app' className='fixed w-screen h-screen min-h-screen min-w-full overflow-auto no-scrollbar whitespace-nowrap'>
      <App />
    </div>
  </React.StrictMode>
)

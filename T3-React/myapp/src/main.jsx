import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Comp3 from './Comp3.jsx'
// import Comp2 from './Comp2.jsx'
// import Comp1 from './Comp1.jsx'
// import Comp4 from './Comp4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Comp3 /> */}
    {/* <Comp4 /> */}
  </StrictMode>,
)

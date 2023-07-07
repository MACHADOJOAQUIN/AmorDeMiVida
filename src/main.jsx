import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex mt-[7vh]'>
      <label className="switch w-[100wh] m-auto" >
        <input type="checkbox"/>
        <span onClick={() => {
          const audio = document.getElementById('audio')
          audio.muted = !audio.muted
        }
      } className="slider"></span>
      </label>
    </div>
    <audio  autoPlay muted  loop id='audio'>
      <source src="morat.mp3" type="audio/mpeg"/>
    </audio>
    <App />
  </React.StrictMode>,
)
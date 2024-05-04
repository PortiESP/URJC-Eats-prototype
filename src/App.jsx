import './App.css'
import iphoneFrame from "@/assets/iphone_frame.png"
import SceneManager from '@/scenes/SceneManager'

function App() {

  return (
    <div className="app-wrapper">
      <div className="app-top-container">
        
      </div>
      <div className="app-mid-container">
        <div className='app-frame-container'>
          <img src={iphoneFrame} className='app-frame-image'/>
          <div className='app-frame-content'>
            <SceneManager />
          </div>
        </div>
      </div>
      <div className="app-bottom-container">

      </div>

    </div>
  )
}

export default App

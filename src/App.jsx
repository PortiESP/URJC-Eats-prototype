import './App.css'
import iphoneFrame from "@/assets/iphone_frame.png"
import SceneManager from '@/scenes/SceneManager'
import logo1 from '@/assets/madrid_dev.svg'

function App() {

  return (
    <div className="app-wrapper">
      <div className="app-top-container">
        
      </div>
      <div className="app-mid-container">
        <aside className="asideL"></aside>
        <div className='app-frame-container'>
          <div className='app-frame-content'>
            <SceneManager />
          </div>
          <img src={iphoneFrame} className='app-frame-image'/>
        </div>
        <aside className="asideR"></aside>
      </div>
      <div className="app-bottom-container">
        <img src={logo1} alt="MadridDevLogo"  width={200}/>
        <span>© 2021 MadridDev</span>
      </div>

    </div>
  )
}

export default App

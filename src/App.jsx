import './App.css'
import iphoneFrame from "@/assets/iphone_frame.png"
import SceneManager from '@/scenes/SceneManager'
import logo1 from '@/assets/madrid_dev.svg'
import { useState } from 'react'
import requirements from '@/data/requirements'
import Requirement from './components/Requirement'

function App() {

  const [scene, setScene] = useState('login')

  return (
    <div className="app-wrapper">
      <div className="app-top-container">
        <h1>URJC <span>Eats</span></h1>
        <span>Prototype-V1</span>
      </div>
      <div className="app-mid-container">
        <aside className="asideL">
          {
            requirements[scene]?.map((requirement, index) => <Requirement key={index} requirement={requirement} />)
          }
        </aside>
        <div className='app-frame-container'>
          <div className='app-frame-content'>
            <SceneManager scene={scene} setScene={setScene}/>
          </div>
          <img src={iphoneFrame} className='app-frame-image'/>
        </div>
        <aside className="asideR"></aside>
      </div>
      <div className="app-bottom-container">
        <img src={logo1} alt="MadridDevLogo"  width={150}/>
        <span>© 2021 MadridDev</span>
      </div>

    </div>
  )
}

export default App

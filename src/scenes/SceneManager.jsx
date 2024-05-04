import { useState } from "react"
import MainScene from "@/scenes/MainMenu"
import LogIn from "@/scenes/LogIn"

const scenes = {
    main: MainScene,
    login: LogIn
}

export default function SceneManager() {
    const [scene, setScene] = useState('login')

    const Scene = scenes[scene]
    return (
        <div className="scene-wrapper">
            <Scene setScene={setScene} />
        </div>
    )
}
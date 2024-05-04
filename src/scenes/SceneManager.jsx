import { useState } from "react"
import LogIn from "@/scenes/LogIn"
import MainMenu from "@/scenes/MainMenu"

const scenes = {
    mainMenu: MainMenu,
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
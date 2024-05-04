import { useState } from "react"
import MainScene from "@/scenes/MainMenu"

const scenes = {
    main: MainScene
}

export default function SceneManager() {
    const [scene, setScene] = useState('main')

    const Scene = scenes[scene]
    return <Scene setScene={setScene} />
}
import { useState } from "react"
import LogIn from "@/scenes/LogIn"
import MainMenu from "@/scenes/MainMenu"
import ProductDetail from "@/scenes/ProductDetail"

const scenes = {
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail
}

export default function SceneManager() {
    const [scene, setScene] = useState('mainMenu')

    const Scene = scenes[scene]
    return (
        <div className="scene-wrapper">
            <Scene setScene={setScene} />
        </div>
    )
}
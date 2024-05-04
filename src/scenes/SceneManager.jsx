import { useState } from "react"
import LogIn from "@/scenes/LogIn"
import MainMenu from "@/scenes/MainMenu"
import ProductDetail from "@/scenes/ProductDetail"
import Nav from "@/components/Nav"
import Cart from "./Cart"

const scenes = {
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail,
    cart: Cart
}

export default function SceneManager() {
    const [scene, setScene] = useState('mainMenu')

    const Scene = scenes[scene]
    return (<div className="scene-wrapper">
        <div className="scene-content">
            <Scene setScene={setScene} />
        </div>
        {   scene !== 'login' &&
            <Nav setScene={setScene} />
        }
    </div>
    )
}
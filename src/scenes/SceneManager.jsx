import { useState } from "react"
import LogIn from "@/scenes/LogIn"
import MainMenu from "@/scenes/MainMenu"
import ProductDetail from "@/scenes/ProductDetail"
import Nav from "@/components/Nav"
import Cart from "@/scenes/Cart"
import Delivery from "@/scenes/Cart/Delivery"

const scenes = {
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail,
    cart: Cart,
    delivery: Delivery
}

export default function SceneManager() {
    const [scene, setScene] = useState('delivery')

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
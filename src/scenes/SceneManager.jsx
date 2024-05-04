import { useState } from "react"
import LogIn from "@/scenes/LogIn"
import MainMenu from "@/scenes/MainMenu"
import ProductDetail from "@/scenes/ProductDetail"
import Nav from "@/components/Nav"
import Cart from "@/scenes/Cart"
import Delivery from "@/scenes/Cart/Delivery"
import User from "@/scenes/User"
import FAQs from "@/scenes/User/FAQs"
import Admin from "@/scenes/Admin"

const scenes = {
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail,
    cart: Cart,
    delivery: Delivery,
    user: User,
    faqs: FAQs,
    adminMenu: Admin
}

export default function SceneManager() {
    const [scene, setScene] = useState('adminMenu')

    const Scene = scenes[scene]
    return (<div className="scene-wrapper">
        <div className="scene-content">
            <Scene setScene={setScene} />
        </div>
        {   scene !== 'login' && scene !== "adminMenu" &&
            <Nav setScene={setScene} />
        }
    </div>
    )
}
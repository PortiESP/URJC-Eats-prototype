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
import PAS from "./PAS"
import Welcome from "./Welcome"
import { useEffect } from "react"

const scenes = {
    welcome: Welcome,
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail,
    cart: Cart,
    delivery: Delivery,
    user: User,
    faqs: FAQs,
    adminMenu: Admin,
    pasMenu: PAS
}

const notNavScenes = ['login', 'adminMenu', 'pasMenu', 'welcome']
const allowedUnloggedScenes = ['login', 'welcome', 'mainMenu', 'productDetail', 'faqs']

export default function SceneManager({ scene, setScene }) {

    // Prevents the user from accessing restricted scenes
    useEffect(() => {
        if (localStorage.getItem('user') === null && allowedUnloggedScenes.includes(scene) === false){
            setScene("login")
        }
    }, [scene])

    const Scene = scenes[scene]
    return (<div className="scene-wrapper">
        <div className="scene-content">
            <Scene setScene={setScene} />
        </div>
        {   notNavScenes.includes(scene) === false &&
            <Nav setScene={setScene} />
        }
    </div>
    )
}
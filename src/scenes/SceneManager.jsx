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
import Password from "./Password"
import Law from "./Law"

const scenes = {
    welcome: Welcome,
    law: Law,
    mainMenu: MainMenu,
    login: LogIn,
    productDetail: ProductDetail,
    cart: Cart,
    delivery: Delivery,
    user: User,
    faqs: FAQs,
    adminMenu: Admin,
    pasMenu: PAS,
    password: Password
}

const notNavScenes = ['login', 'adminMenu', 'pasMenu', 'welcome', "faqs"]
const allowedUnloggedScenes = ['login', 'welcome', 'mainMenu', 'productDetail', 'faqs', "law"]

export default function SceneManager({ scene, setScene }) {

    // Prevents the user from accessing restricted scenes
    useEffect(() => {
        if (localStorage.getItem('user') === null && allowedUnloggedScenes.includes(scene) === false){
            setScene("login")
        }
        document.querySelector(".scene-content").scrollTo(0, 0)
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
import scss from "@/styles/nav.module.scss";
import icon1 from "@/assets/basket.svg";
import icon2 from "@/assets/house.svg";
import icon3 from "@/assets/person.svg";

export default function Nav({setScene}) {
    return (
        <div className={scss.wrapper}>
            <nav>
                <div className={scss.icon}><img src={icon1} alt="Icon" onClick={()=> setScene("cart")} /></div>
                <div className={scss.icon}><img src={icon2} alt="Icon" onClick={()=> setScene("mainMenu")} /></div>
                <div className={scss.icon}><img src={icon3} alt="Icon" onClick={()=> setScene("user")} /></div>
            </nav>
        </div>
    );
}
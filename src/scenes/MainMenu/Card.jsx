import scss from '@/styles/scenes_styles/main_menu_card.module.scss';

export default function Card(props){
    return (
        <div className={scss.card} onClick={()=> props.setScene("productDetail")}>
            <div className={scss.card_content}>
                <div className={scss.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
            </div>
            <div className={scss.card_title}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
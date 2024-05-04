import scss from "@/styles/scenes_styles/cart.module.scss";

export default function Cart({setScene}) {

    const cart = JSON.parse(localStorage.getItem('cart') || "[]");

    const handlePay = () => {
        localStorage.setItem('cart', JSON.stringify([]));
        setScene("mainMenu");
    }

    return (
        <div className={scss.wrapper}>
            <h1>Carrito</h1>
            <div className={scss.items}>
            {
                cart.length 
                ?
                cart.map((item, index) => <CartItem key={index} title={item.name} price={item.price} />) 
                :
                <h3>Carrito vacío</h3>
            }
            </div>
            <button onClick={handlePay} disabled={!cart.length}>Pagar</button>
        </div>
    )
}


function CartItem(props) {
    return (
        <div className={scss.cart_item}>
            <div className={scss.image}>
                <img src="https://via.placeholder.com/50" alt="Product" />
            </div>
            <div className={scss.details}>
                <h3>{props.title}</h3>
                <span>{props.price}€</span>
            </div>
        </div>
    )
}
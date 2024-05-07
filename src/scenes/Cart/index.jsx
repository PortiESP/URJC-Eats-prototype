import scss from "@/styles/scenes_styles/cart.module.scss";

export default function Cart({setScene}) {

    const cart = JSON.parse(localStorage.getItem('cart') || "[]");

    const handlePay = () => {
        setScene("delivery");
    }

    return (
        <div className={scss.wrapper}>
            <h1>Mi menú</h1>
            <div className={scss.items}>
            {
                cart.length 
                ?
                cart.map((item, index) => <CartItem key={index} title={item.name} price={item.price} />) 
                :
                <h3>Carrito vacío</h3>
            }
            </div>
            <button onClick={handlePay} disabled={!cart.length}>Realizar pedido</button>
            <h1>Pedidos anteriores</h1>
            <PrevMenu campus="Fuenlabrada" date="24/5" status="Pagado"/>
            <PrevMenu campus="Fuenlabrada" date="23/5" status="Anulado"/>
            <PrevMenu campus="Móstoles" date="20/5" status="Entregado"/>
            <PrevMenu campus="Fuenlabrada" date="14/5" status="Entregado"/>
            <PrevMenu campus="Fuenlabrada" date="27/5" status="Anulado"/>
            <PrevMenu campus="Fuenlabrada" date="27/5" status="Anulado"/>
            <PrevMenu campus="Fuenlabrada" date="19/4" status="Entregado"/>
            <PrevMenu campus="Fuenlabrada" date="16/4" status="Entregado"/>
            <PrevMenu campus="Fuenlabrada" date="1/4" status="Entregado"/>
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

function PrevMenu(props) {
    return (
        <div className={scss.prev_menu}>
            <div className={scss.details}>
                <h4>Menú del {props.date} <span className={[scss.label, scss[props.status]].join(" ")}>{props.status}</span></h4>
                <span>Campus {props.campus}</span>
            </div>
            {
                props.status === "Pagado" &&
                <div className={scss.buttons}>
                    <button>Donar</button>
                    <button>Anular</button>
                </div>
            }
        </div>
    )
}
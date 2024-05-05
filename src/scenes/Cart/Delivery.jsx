import scss from "@/styles/scenes_styles/delivery.module.scss";

export default function Delivery({setScene}) {

    const handlePay = () => {
        localStorage.setItem('cart', JSON.stringify([]));
        setScene('mainMenu')
    }

    return (
        <div className={scss.wrapper}>
            <h1>Pedido</h1>
            <div className={scss.details}>
                <div className={scss.input_date}>
                    <label htmlFor="date">Fecha</label>
                    <input type="date" id="date" />
                </div>
                <div className={scss.input_location}>
                    <label htmlFor="time">Lugar</label>
                    <select name="campus" id="campus">
                        <option value="mostoles">Móstoles</option>
                        <option value="fuenlabrada">Fuenlabrada</option>    
                        <option value="alcorcon">Alcorcón</option>
                        <option value="aranjuez">Aranjuez</option>
                        <option value="madrid-q">Madrid-Quintana</option>
                    </select>                
                </div>
                <div className={scss.summary}>
                    <h2>Resumen</h2>
                    <div className={scss.items}>
                        <span>Productos</span>
                        <ul>
                            <li>Primer plato: Macarrones con tomate</li>
                            <li>Segundo plato: Hamburguesa </li>
                            <li>Potre: Helado de vainilla</li>
                            <li>Bebida: Cocacola</li>
                            <li>Pan: Sí</li>
                        </ul>
                    </div>
                    <div className={scss.total}>
                        <span>Total</span>
                        <span>7.95€</span>
                    </div>
                </div>
                <div className={scss.input_group}>
                    <label htmlFor="remember">Recordar datos de pago</label>
                    <input type="checkbox" id="remember" />
                </div>
            </div>
            <button onClick={handlePay}>Pagar</button>
        </div>
    )
}
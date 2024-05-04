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
                    <label htmlFor="time">Hora</label>
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
                    <div className={scss.total}>
                        <span>Total</span>
                        <span>0€</span>
                    </div>
                    <div className={scss.items}>
                        <span>Productos</span>
                        <ul>
                            <li>Producto 1</li>
                            <li>Producto 2</li>
                            <li>Producto 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={handlePay}>Pagar</button>
        </div>
    )
}
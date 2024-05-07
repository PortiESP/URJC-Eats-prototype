import scss from '@/styles/scenes_styles/product_detail.module.scss';


export default function ProductDetail({setScene}) {

    const handleCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || "[]");
        cart.push({name: 'Macarrones con tomate', price: '17'});
        localStorage.setItem('cart', JSON.stringify(cart));
        setScene('mainMenu');
    }

    return (
        <div className={scss.wrapper}>
            <div className={scss.details_container}>
                <h2>Macarrones con queso</h2>
                <div className={scss.image}>
                    <img src="https://via.placeholder.com/300" alt="Product" />
                </div>
                <div className={scss.rating}>⭐⭐⭐⭐⭐
                    <span>Toca para hacer tu valoración</span>
                </div>
                <div className={scss.details}>
                    <div>
                        <p className={scss.hint_title}>Ingredientes</p>
                        <p className={scss.hint_data}>Pasta, tomate frito, orégano, queso rallado, sal, aceite.</p>
                    </div>
                    <div>
                        <p className={scss.hint_title}>Alergenos</p>
                        <p className={scss.hint_data}>Gluten, lactosa, etc.</p>
                    </div>

                    <p>Precio: Product Price</p>
                </div>
            </div>
            <button onClick={handleCart}>Añadir a Mi Menú
                <span className={scss.availability}>Disponibilidad: 99</span>
            </button>
        </div>
    )
}
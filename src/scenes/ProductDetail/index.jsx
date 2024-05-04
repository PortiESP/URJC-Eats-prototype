import scss from '@/styles/scenes_styles/product_detail.module.scss';


export default function ProductDetail({setScene}) {
    return (
        <div className={scss.wrapper}>
            <div className={scss.details_container}>
                <h2>Product Title</h2>
                <div className={scss.image}>
                    <img src="https://via.placeholder.com/300" alt="Product" />
                </div>
                <div className={scss.details}>
                    <div>
                        <p className={scss.hint_title}>Ingredientes</p>
                        <p className={scss.hint_data}>Sal, azúcar, agua, harina, etc.</p>
                    </div>
                    <div>
                        <p className={scss.hint_title}>Alergenos</p>
                        <p className={scss.hint_data}>Gluten, lactosa, etc.</p>
                    </div>

                    <p>Precio: Product Price</p>
                </div>
            </div>
            <button onClick={() => setScene('mainMenu')}>Añadir al carrito</button>
        </div>
    )
}
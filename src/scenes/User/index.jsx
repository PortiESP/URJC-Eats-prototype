import scss from '@/styles/scenes_styles/user.module.scss';

export default function User({ setScene }) {

    return (
        <div className={scss.wrapper}>
            <h1>User</h1>
            <h2>Datos personales</h2>
            <div className={scss.details}>
                <p>Name: <span>Pedro</span></p>
                <p>Email: <span>pedro@urjc.es</span></p>
                <p>Rol: <span>Profesor</span></p>
            </div>
            <div className={scss.stats}>
                <h2>Stats</h2>
                <div className={scss.stat}>
                    <span>Orders</span>
                    <span>0</span>
                </div>
                <div className={scss.stat}>
                    <span>Gastos del último mes</span>
                    <span>0</span>
                </div>
                <div className={scss.stat}>
                    <span>Platos valorados</span>
                    <span>0</span>
                </div>
                <div className={scss.stat}>
                    <span>Platos donados</span>
                    <span>0</span>
                </div>
                <div className={scss.items}>
                    <span>Platos favoritos</span>
                    <ol>
                        <li>Producto 1</li>
                        <li>Producto 2</li>
                        <li>Producto 3</li>
                    </ol>
                </div>
            </div>
            <hr />
            <button onClick={() => setScene("faqs")}>Ayuda</button>
            <button onClick={() => setScene("login")}>Cerrar sesión</button>
        </div>
    );
}
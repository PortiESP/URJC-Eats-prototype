import scss from '@/styles/scenes_styles/user.module.scss';

export default function User({ setScene }) {

    const handleSessionClose = () => {
        localStorage.removeItem('user');
        setScene("login");
    }

    return (
        <div className={scss.wrapper}>
            <h1>Usuario</h1>
            <h2>Datos personales</h2>
            <div className={scss.details}>
                <p>Nombre: <span>Pedro</span></p>
                <p>Email: <span>pedro@alumnos.urjc.es</span></p>
                <p>Rol: <span>Alumno</span></p>
            </div>
            <div className={scss.stats}>
                <h2>Estadísticas</h2>
                <div className={scss.stat}>
                    <span>Pedidos</span>
                    <span>7</span>
                </div>
                <div className={scss.stat}>
                    <span>Gastos del último mes</span>
                    <span>67€</span>
                </div>
                <div className={scss.stat}>
                    <span>Platos valorados</span>
                    <span>3</span>
                </div>
                <div className={scss.stat}>
                    <span>Platos donados</span>
                    <span>2</span>
                </div>
            </div>
            <hr />
            <button onClick={()=> setScene("password")}>Cambiar contraseña</button>
            <button onClick={handleSessionClose}>Cerrar sesión</button>
        </div>
    );
}
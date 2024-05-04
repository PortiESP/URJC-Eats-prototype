import scss from '@/styles/scenes_styles/pas.module.scss';

export default function PAS({setScene}) {

    return (
        <div className={scss.wrapper}>
            <h1>PAS Autorizado</h1>
            <div className={scss.form}>
                <h2>Registrar usuario externo</h2>

                <hr />

                <div className={scss.input_group}>
                    <label htmlFor="email">DNI</label>
                    <input name="dni" id="dni" />
                </div>
                <div className={scss.input_group}>
                    <label htmlFor="pass">Contraseña</label>
                    <input type="password" name="pass" id="pass" />
                </div>

                <hr />

                <button>Registrar</button>
                <button onClick={() => setScene("login")}>Cerrar sesión</button>
            </div>
        </div>
    )
}
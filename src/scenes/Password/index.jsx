import scss from '@/styles/scenes_styles/password.module.scss';

export default function Password({setScene}) {

    return (
        <div className={scss.wrapper}>
            <h1>Contraseña</h1>
            <div className={scss.form}>
                <h2>Cambiar contraseña</h2>


                <div className={scss.input_group}>
                    <label htmlFor="email">Nueva contreña</label>
                    <input name="dni" id="dni" />
                </div>
                <div className={scss.input_group}>
                    <label htmlFor="pass">Confirmar contraseña</label>
                    <input type="password" name="pass" id="pass" />
                </div>

                <hr />

                <button onClick={()=> setScene("user")}>Aceptar</button>
                <button onClick={()=> setScene("user")}>Cancelar</button>

            </div>
        </div>
    )
}
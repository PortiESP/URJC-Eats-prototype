import scss from '@/styles/scenes_styles/law.module.scss';

export default function Law({setScene}) {

    const handleAccept = () => {
        localStorage.setItem('first_time', false)
        setScene('login')
    }

    return (
        <div className={scss.wrapper}>
            <h1>Terminos y Condiciones</h1>
            <p>La aplicación hace un tratamiendo de los datos de acuerdo con la Ley Orgánica 15/1999 y Ley Orgánica 3/2018</p>
            <p>Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición en la dirección de correo electrónico: <a href="mailto:" className={scss.email}>contanto@madrid.dev</a></p>
            <p>Para más información, contacte con el administrador de la aplicación</p>
            <hr />
            <button onClick={handleAccept}>Aceptar</button>
        </div>
    )
}
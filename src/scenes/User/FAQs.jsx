import scss from '@/styles/scenes_styles/faqs.module.scss';

export default function FAQs({ setScene }) {
    return (
        <div className={scss.wrapper}>
            <h1>FAQs</h1>
            <div className={scss.faq}>
                <h2>¿Cómo puedo cambiar mi contraseña?</h2>
                <p>Para cambiar tu contraseña, ve a la sección de "Datos personales" y selecciona la opción "Cambiar contraseña".</p>
            </div>
            <div className={scss.faq}>
                <h2>¿Cómo puedo recuperar mi contraseña?</h2>
                <p>Para recuperar tu contraseña, ve a la sección de "Login" y selecciona la opción "Olvidé mi contraseña".</p>
            </div>
            <div className={scss.faq}>
                <h2>¿Cómo puedo consultar mis pedidos?</h2>
                <p>Para consultar tus pedidos, ve a la sección de "Pedidos" y selecciona la opción "Consultar pedidos".</p>
            </div>
            <div className={scss.faq}>
                <h2>¿Cómo puedo ver mi historial de pedidos?</h2>
                <p>Para ver tu historial de pedidos, ve a la sección de "Pedidos" y selecciona la opción "Historial de pedidos".</p>
            </div>
            <button onClick={()=> setScene("login")}>Atrás</button>
        </div>
    );
}
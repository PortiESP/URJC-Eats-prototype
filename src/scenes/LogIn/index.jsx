import scss from '@/styles/scenes_styles/login.module.scss';
import { useState } from 'react';
import { useRef } from 'react';

const users = [
    {
        email: 'admin@urjc.es',
        password: 'admin',
        nextScene: 'adminMenu'
    },
    {
        email: 't@urjc.es',
        password: 't',
        nextScene: 'adminMenu'
    },
    {
        email: 'alumno@urjc.es',
        password: 'alumno',
        nextScene: 'mainMenu'
    }
]

export default function LogIn({setScene}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const $email = useRef();
    const $password = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(user => (user.email === email || user.email.split("@")[0] === email) && user.password === password);

        if(user){
            setScene(user.nextScene);
        } else {
            setError(true);
            $email.current.focus();
        }
    }

    return (
        <div className={scss.wrapper}>
            <div className={scss.title}>
                <h1>Inicio de Sesión</h1>
            </div>
            <form className={scss.form}>
                <div className={scss.formGroup}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} ref={$email}/>
                </div>
                <div className={scss.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} ref={$password}/>
                </div>
                <div className={scss.formGroup} onClick={handleSubmit}>
                    {error && <span className={scss.error}>{error && 'Usuario o contraseña incorrectos'}</span>}
                    <button type="submit">Acceder</button>
                </div>
            </form>
            <div className={scss.lang}>
                <select name="lang" id="lang">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
            <div className={scss.hint}>
                <p>¿No tienes cuenta?</p>
                <p>Contacta con un administrador</p>
            </div>
        </div>
    )
}
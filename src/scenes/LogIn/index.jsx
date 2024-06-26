import scss from '@/styles/scenes_styles/login.module.scss';
import { useState } from 'react';
import { useRef } from 'react';
import users from '@/data/users';

import urjc_eats_logo from '@/assets/urjc_eats.png';
import { useEffect } from 'react';


export default function LogIn({setScene}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const $email = useRef();
    const $password = useRef();

    useEffect(() => {
        localStorage.removeItem('user');
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(user => (user.email === email || user.email.split("@")[0] === email) && user.password === password);

        if(user){
            localStorage.setItem('user', user.email);
            setScene(user.nextScene);
        } else {
            setError(true);
            $email.current.focus();
        }
    }

    return (
        <div className={scss.wrapper}>
            <div className={scss.title}>
                <div className={scss.logo}>
                    <img src={urjc_eats_logo} alt="URJCE Logo" />
                </div>
                <h1>Inicio de Sesión</h1>
            </div>
            <form className={scss.form}>
                <div className={scss.formGroup}>
                    <label htmlFor="email">Correo Electrónico / DNI</label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} ref={$email}/>
                </div>
                <div className={scss.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} ref={$password}/>
                </div>
                <div className={scss.formGroup} onClick={handleSubmit}>
                    {error && <span className={scss.error}>{error && 'Usuario o contraseña incorrectos'}</span>}
                    <button type="submit">Acceder</button>
                    <div className={scss.btn_group}>
                        <button onClick={()=> setScene("mainMenu")}>Explorar sin identificarse</button>
                        <button onClick={() => setScene("faqs")}>Ayuda</button>
                    </div>
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
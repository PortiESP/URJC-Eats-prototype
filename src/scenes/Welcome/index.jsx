import scss from '@/styles/scenes_styles/welcome.module.scss';
import linkedin from '@/assets/linkedin.svg';
import logo from '@/assets/madrid_dev.svg'



export default function Welcome({setScene}) {
    return (<>
        <div className={scss.wrapper}>
                <div className={scss.info}>
                    <h1>Bienvenido al prototipo del proyecto URJC Eats</h1>
                    <h3>¿Qué es esto?</h3>
                    <p>Este prototipo ha sido desarrollado por el equipo de <strong>MadridDev</strong> para la asignatura de <em>Arquitectura e Ingeniería de Requisitos</em> de la URJC</p>
                    <img src={logo} alt="MadridDev logo" />
                    <p>
                        Miembros del equipo
                        <ul>
                            <li><a href="https://www.linkedin.com/in/porti/">Jaime Portillo <img src={linkedin} alt='Linkedin logo'></img></a></li>
                            <li><a href="https://www.linkedin.com/in/cub1z/">Diego Sanchez <img src={linkedin} alt='Linkedin logo'></img></a></li>
                            <li><a href="">Marcos García <img src={linkedin} alt='Linkedin logo'></img></a></li>
                            <li><a href="https://www.linkedin.com/in/danisantos15/">Daniel Santos <img src={linkedin} alt='Linkedin logo'></img></a></li>
                        </ul>

                    </p>
                    <h3>Referencias</h3>
                    <p>Para hacer este prototipo nos hemos basado en el <a target="_blank" href="/docs/entrega_practica_analisis.pdf">documento</a> de especificación de requisitos entregado, y en el <a target="_blank" href="/docs/enunciado_urjc_eats.pdf">documento</a> del enunciado de la práctica</p>
                    <p><em>Enlace al <a href="https://github.com/PortiESP/URJC-Eats-prototype" target='_blank'>repositorio del prototipo</a></em></p>
                    <p className={scss.hint}>Para empezar, pulsa el botón de abajo</p>
                    <hr/>
                    <button onClick={() => {
                        localStorage.setItem('first_time', false)
                        setScene('login')
                    }}>Empezar</button>
                </div>
        </div>
    </>)
}
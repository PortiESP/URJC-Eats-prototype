
import scss from '@/styles/alert.module.scss';

export default function useAlert({setShow, show, ...props}){

    return (<> { show &&
        <div className={scss.wrapper}>
            <div className={scss.alert}>
                <h3>{props.title}</h3>
                <p>{props.message}</p>
                <button onClick={() => setShow(false)} autoFocus>Cerrar</button>
            </div>
        </div>}
    </>)
}

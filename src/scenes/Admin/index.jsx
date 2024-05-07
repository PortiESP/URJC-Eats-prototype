
import scss from '@/styles/scenes_styles/admin.module.scss';

export default function Admin({setScene}) {

    return (
        <div className={scss.wrapper}>
            <h1>Personal catering</h1>
            <div className={scss.form}>
                <select name="prod" id="prod">
                    <option value="p1">Producto 1</option>
                    <option value="p2">Producto 2</option>
                    <option value="p3">Producto 3</option>
                    <option value="p4">Producto 4</option>
                    <option value="p5">Producto 5</option>
                </select>

                <hr />

                <input type="text" placeholder="Nombre del producto" />
                <input type="text" placeholder="Precio (€)" />
                <input type="text" placeholder="Descripción" />
                <input type="text" placeholder="Imágen (URL)" />

                <hr />

                <button>Actualizar</button>
                <button>Eliminar</button>

                <hr/>
                
                <button onClick={() => setScene("login")}>Cerrar sesión</button>

            </div>
        </div>
    )
}
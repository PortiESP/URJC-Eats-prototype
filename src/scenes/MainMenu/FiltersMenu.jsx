import scss from '@/styles/scenes_styles/main_menu_filters.module.scss';

export default function FiltersMenu({setShowFiltersMenu}){
    return (
     <div className={scss.wrapper}>
        <div className={scss.filters}>
            <div className={scss.input_group}>
                <label>Calificación mínima</label>
                <input className={scss.input_number} placeholder="0"/>
            </div>
            <div className={scss.input_group}>
                <label>Precio entre</label>
                <input className={scss.input_number} placeholder="0"/>
                <span> - </span>
                <input className={scss.input_number} placeholder="99"/>
            </div>
            <div className={[scss.input_group, scss.intolerances].join(" ")}>
                <label>Intolerancia a</label>
                <div className={scss.ck_list}>
                    <div className={scss.ck_item}>
                        <input type="checkbox" id="gluten"/>
                        <label htmlFor='gluten'>Gluten</label>
                    </div>
                    <div className={scss.ck_item}>
                        <input type="checkbox" id='lactosa'/>
                        <label htmlFor='lactosa'>Lactosa</label>
                    </div>
                    <div className={scss.ck_item}>
                        <input type="checkbox" id='frutos'/>
                        <label htmlFor='frutos'>Frutos secos</label>
                    </div>
                    <div className={scss.ck_item}>
                        <input type="checkbox" id='mariscos'/>
                        <label htmlFor='mariscos'>Mariscos</label>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={()=>setShowFiltersMenu(false)}>Aplicar</button>
        <span onClick={()=>setShowFiltersMenu(false)}>Cerrar</span>
    </div>
    )
}
import scss from '@/styles/scenes_styles/main_menu.module.scss';
import Card from './Card';
import { useState } from 'react';
import FiltersMenu from './FiltersMenu';
import Nav from '@/components/Nav';
import products from '@/data/products';

export default function MainMenu({setScene}){

    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className={scss.wrapper}>
            <div className={scss.title}>
                <h1>Menú</h1>
            </div>
            <div className={scss.content}>
                <div className={scss.search}>
                    <search>
                        <input type="text" placeholder="Buscar..."/>
                        <button>Ir</button>
                    </search>
                    <button onClick={() => setShowFilters(!showFilters)} className={scss.button_filters}>Filtros</button>
                    {
                        showFilters &&
                        <FiltersMenu setShowFiltersMenu={setShowFilters}/>
                    }
                    
                </div>
                <div className={scss.results}>
                    {products.map((data, index) => <Card key={index} title={data.title} content={data.description} image={data.image} footer={data.footer} setScene={setScene} />)}
                </div>
            </div>
        </div>
    )
}
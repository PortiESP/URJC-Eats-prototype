import scss from '@/styles/scenes_styles/main_menu.module.scss';
import Card from './Card';
import { useState } from 'react';
import FiltersMenu from './FiltersMenu';

const cards = [
    {
        title: 'Card 1',
        description: 'Description 1',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 1'
    },
    {
        title: 'Card 2',
        description: 'Description 2',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 2'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 3'
    },
    {
        title: 'Card 4',
        description: 'Description 4',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 4'
    },
    {
        title: 'Card 5',
        description: 'Description 5',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 5'
    },
    {
        title: 'Card 6',
        description: 'Description 6',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 6'
    },
    {
        title: 'Card 7',
        description: 'Description 7',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 7'
    },
    {
        title: 'Card 8',
        description: 'Description 8',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 8'
    },
    {
        title: 'Card 9',
        description: 'Description 9',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 9'
    },
    {
        title: 'Card 10',
        description: 'Description 10',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 10'
    },
    {
        title: 'Card 11',
        description: 'Description 11',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 11'
    },
    {
        title: 'Card 12',
        description: 'Description 12',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 12'
    },
    {
        title: 'Card 13',
        description: 'Description 13',
        image: 'https://via.placeholder.com/150',
        footer: 'Footer 13'
    },

]

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
                    
                </div>
                <div className={scss.results}>
                    {cards.map((card, index) => <Card key={index} title={card.title} content={card.description} image={card.image} footer={card.footer} setScene={setScene} />)}
                </div>
            </div>
            {
                showFilters &&
                <FiltersMenu setShowFiltersMenu={setShowFilters}/>
            }
        </div>
    )
}
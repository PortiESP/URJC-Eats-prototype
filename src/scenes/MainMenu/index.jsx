import scss from '@/styles/scenes_styles/main_menu.module.scss';

export default function MainMenu(){
    return (
        <div className="scene-wrapper">
            <div className="main-menu-top-container">
                <h1>Game Title</h1>
            </div>
            <div className="main-menu-bottom-container">
                <button>Start Game</button>
            </div>
        </div>
    )
}
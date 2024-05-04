export default function MainMenu(){
    return (
        <div className="main-menu-wrapper">
        <div className="main-menu-top-container">
            <h1>Game Title</h1>
        </div>
        <div className="main-menu-mid-container">
            <div className='main-menu-image-container'>
            <img src="/assets/iphone_frame.png"/>
            </div>
        </div>
        <div className="main-menu-bottom-container">
            <button>Start Game</button>
        </div>
        </div>
    )
}
import CartWidget from "../CartWdiget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3 className="title">Juegos GameOver</h3>
            <div>
                <button>Acción</button>
                <button>Rol</button>
                <button>Estrategia</button>
                <button>Aventura</button>
                <button>Indies</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
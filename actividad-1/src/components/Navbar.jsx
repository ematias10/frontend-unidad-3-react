const Navbar = ({cartCount}) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">TechStore</div>
            <div className="navbar-search">
                <input type="text" placeholder="Buscar productos..." />
            </div>
            <div className="navbar-cart">
                <span className="cart-icon">🛒</span>
                <span>Carrito</span>
                <span className="cart-counter">{cartCount}</span>
            </div>
        </nav>


    )
}

export default Navbar;
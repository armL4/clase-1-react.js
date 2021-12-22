import React from "react";
import logo from "./../static/pixel-cafe.png"
const NavBar = () => {
    <nav className="NavBar">
        <div>
        <h3>
            marca pendiente
        </h3>
        </div>
        <div className="categorias">
            <button className="opcion">
                inicio
            </button>
            <button className="opcion">
                opciones
            </button>
            <button className="opcion">
                nosotros
            </button>
        </div>
        <button>
                <img src={logo} alt="cart"/>
                0
        </button>
    </nav>
}
export default NavBar
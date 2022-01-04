import React from "react";
import logo from "./../static/pixel-cafe.png"
import { Carro } from "./Carro";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
const NavBar = () => {
    return(
    <nav className="NavBar">
        <div>
        <h3>
            marca pendiente
            
        </h3>
        
        </div>
        <div className="categorias">
        <Button variant="primary">Primary</Button>{' '}
            <button className="opcion">
                inicio
            </button>
            <button className="opcion">
                opciones
            </button>
            <button className="opcion">
                nosotros
            </button>
            <button className="opcion">
            <Carro/>
            </button>
            
            
        </div>
        <button>
                <img src={logo} alt="cart"/>
        </button>
        <ItemCount min={0} max={10}/>
    </nav>
    
    )
}
export default NavBar;
import React from 'react'
import {Link} from "react-router-dom";
import {CgSearch} from 'react-icons/cg';
import {FcFilmReel} from 'react-icons/fc';
import './styles/navbar.css';

export const Navbar = () => {
    return (
        <div>
            <ul className="ul-filter">
                <li className="btn"><Link><button className="btn-i" ><FcFilmReel className="log-bol"/></button></Link></li>
                <li className="btn"><Link to="/home"><button className="btn-pk">Home</button></Link></li>
                <li className="btn"><Link><button className="btn-fi">Nuevas Películas</button></Link></li>
                <li className="btn"><button className="btn-fg">Rentar</button></li>
                <li className="li-s"><span className="frase" >Buscar</span></li>
                <li className="li-input">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        name="search"
                      />
                </li>
                <li className="li">
                    <button className="btn-lupa" ><Link><CgSearch className="lupa"/></Link ></button></li>
            </ul>
        </div>
    )
}

import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {startLogout} from '../../actions/auth';
import {saveFilms} from "../../actions/films";


export const MainScreen = () => {
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);
    const {rent} = useSelector(state => state.films);

    const handleLogout = () => {
        dispatch(startLogout());
    }
    const handleSave = (movies) => {
        dispatch(saveFilms(movies));
    }

    return (
        <div>
            <div className="nav-bar">
                <span className="name">{ name }</span>
                <button className="btn-salir" onClick={ handleLogout }>
                    <span> Salir</span>
                </button>
            </div>

            <div className="rent summary">
                <h1>Resumen del Alquiler </h1>
                <hr/>
                <table className="table-rent">
                    <tr>
                        <th>Película</th>
                        <th>Precio</th>
                    </tr>
                    {rent.movies.map((e) => (
                        <tr key={e}>
                            <td>{e}</td>
                        </tr>
                    ))}
                    <td>total:{rent.total}</td>
                    <Link to={`/home`}><button onClick={() => {handleSave(rent.movies)}}>Alquilar</button></Link>
                </table>
            </div>
        </div>
    )
}

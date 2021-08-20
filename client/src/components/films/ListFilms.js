import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addFilms} from '../../actions/films';
import {uiOpenModal} from "../../actions/ui"
import {RentModal} from "./RentModal";
import './styles/listFilms.css'

export const ListFilms = () => {

    const {listMovies} = useSelector(state => state.films);

    const dispatch = useDispatch();
    const handleStateFilms = (movie) => {
        const {title, category, picture, year} = movie
        dispatch(addFilms({title, category, picture, year, price: 5}))
    }
    const handleAdd = () => dispatch(uiOpenModal());

    return (
        <div className="list">
            <h1>Lista de Películas</h1>
            <hr/>
            <table className="table">
                <tr>
                    <th>Poster</th>
                    <th>Titulo</th>
                    <th>Año</th>
                    <th>Precio</th>
                    <th>Estado</th>
                </tr>
                {listMovies.map((e) => (
                    <tr key={listMovies.indexOf(e)}>
                        <td><img className="img-whole" src={e.picture} alt={e.title}/></td>
                        <td>{e.title}</td>
                        <td>{e.year}</td>
                        <td>US ${5}</td>
                        {e.state === "Disponible" ? <td>
                            <button className="btn-state" onClick={() => {handleStateFilms(e)}}>{e.state}</button>
                        </td> : <td>{e.state}</td>}
                    </tr>
                ))}
            </table>
            <button className="btn-a" onClick={handleAdd}><h4>Pagar</h4></button>
            <RentModal/>
        </div>
    )
}
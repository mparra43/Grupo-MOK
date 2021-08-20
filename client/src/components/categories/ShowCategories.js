import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {findFilms} from '../../actions/films';
import './styles/categories.css';



export const ShowCategories = () => {

    const {movies} = useSelector(state => state.films);

    const dispatch = useDispatch();

    const handleListFilms = (data) => {
        dispatch(findFilms(data))
    }

    return (
        <div>
            <div>
                <h2 className="p-title">Categorias</h2>
            </div>
            <div  className="flex-container">
                {movies?movies.map((e) =>
                    <div key={movies.indexOf(e)} className="card">
                            <img src={e.img} alt="poster" className="img-porter"/>
                        <div className="buttons">
                            <Link to={`/category/${e.name}`}>
                                <button className="buttons" onClick={() => {
                                    handleListFilms(e.data)
                                }}>{e.name}</button>
                            </Link>
                        </div>
                    </div>): console.log("espere")}
            </div>
        </div>
    )
}
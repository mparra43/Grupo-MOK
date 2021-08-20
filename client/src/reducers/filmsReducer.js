import {types} from '../types/types';

const initialState = {
    movies: [],
    listMovies: [],
    rentMovies: [],
    Rent: [],
    dashboard:{},
}

export const filmsReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.getFilmAll:
            console.log(action.payload)
            return {
                ...state,
                movies: action.payload.filmsAll,
                dashboard: action.payload.stateFilm
            }

        case types.findFilms:
            return {
                ...state,
                listMovies: action.payload,
            }

        case types.addFilm:
            console.log(action.payload)
            return {
                ...state,
                rentMovies: [...state.rentMovies, action.payload]
            }

        case types.filmsForRent:
            let moviesForRent = state.rentMovies.movies.filter((e) => e.title === action.payload)
            return {
                ...state,
                Rent: moviesForRent,
            }

        default:
            return state;

    }
}
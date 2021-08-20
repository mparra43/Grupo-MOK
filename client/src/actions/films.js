import {fetchConToken} from '../helpers/fetch';
import {cardsAll} from '../helpers/cards';
import {types} from '../types/types';


export const getCards = () => {
    return async (dispatch) => {
        const data = await cardsAll();
        try {
            dispatch({type: types.getFilmAll, payload: data})
        } catch (e) {
            console.log(data)
        }
    }
}


export const findFilms = (data) => {
    return function (dispatch) {
        dispatch({type: types.findFilms, payload: data});
    }
}


export const addFilms = (film) => {
    console.log(film)
    return function (dispatch) {
        dispatch({type: types.addFilm, payload: film});
    }
}

export const rentFilms = (summary) => {
    return async (dispatch) => {
        try {
            dispatch({type: types.filmsForRent, payload: summary})
        } catch (e) {
            console.log(e)
        }
    }
}

export const saveFilms = (movies) => {
    return async (dispatch) => {
        try {
            for (let i = 0; i < movies.length; i++) {
                const resp = await fetchConToken('activity', movies[i], 'POST');
                const body = await resp.json();
            }
            const data = await cardsAll()
            dispatch({type: types.getFilmAll, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}

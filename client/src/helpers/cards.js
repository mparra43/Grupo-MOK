import {fetchSinToken} from "./fetch";
const cards = [
    {
        name: "accion",
        img: "https://w7.pngwing.com/pngs/758/196/png-transparent-film-director-action-film-television-film-poster-movie-up.png"
    },
    {
        name: "comedia",
        img: "https://c0.klipartz.com/pngpicture/601/821/sticker-png-film-poster-comedy-slapstick-actor.png"
    },
    {
        name: "drama",
        img: "https://w7.pngwing.com/pngs/442/210/png-transparent-hollywood-film-poster-the-louisville-palace-classic-movies-moviola-album-hat-poster.png"
    },
    {
        name: "documental",
        img: "https://w7.pngwing.com/pngs/962/721/png-transparent-rome-film-fest-documentary-film-film-festival-netflix-wolfpack-television-text-poster.png"
    },
    {
        name: "historia",
        img: "https://static.platzi.com/media/user_upload/Spotlight-Peli%CC%81cula-Netflix-222426b2-83f6-40e4-9522-03c1a6e7dae9.jpg"
    },
    {
        name: "terror",
        img: "https://e7.pngegg.com/pngimages/828/502/png-clipart-hollywood-film-actor-cinematography-the-uninvited-horror-movie-poster-poster-film.png"
    },

]


const cardsAll = async () => {
    let dashboardFilm =[];
    let filmsAll = [];
    let stateFilm={
        rented:[],
        available: [],
    }
    try {
        for (let i = 0; i < cards.length; i++) {
            let {name, img} = cards[i];
            const resp = await fetchSinToken(`films/category?category=${name}`);
            const data = await resp.json();
            filmsAll.push({
                name,
                img,
                data: data
            })
            dashboardFilm = dashboardFilm.concat(data);
        }
        stateFilm.rented= dashboardFilm.filter((e)=> e.state ==="Alquilada")
        stateFilm.available= dashboardFilm.filter((e)=> e.state ==="Disponible")
        return {
            filmsAll,
            stateFilm,
        };
    } catch (e) {
        console.log(e)
    }
}

export {
    cardsAll
}
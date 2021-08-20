const baseUrl = process.env.API_URL;
const fetch = require('node-fetch');
const {Film} = require('../models/Film');


const fetchAllApi = async (endpoint) => {
    const url = `${baseUrl}${endpoint}`;
    const filmsApi = [];
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (let i = 0; i < data.Search.length; i++) {
            let {Title, Type, Poster, Year} = data.Search[i];
            let title = Title
            if (Type === 'movie') {
                const movie = await Film.findOne({where: {title}});
                if (movie === null) {
                    filmsApi.push({
                        title: Title,
                        state: "Disponible",
                        category: endpoint,
                        year: Year,
                        picture: Poster,
                    });
                } else if(movie.category=== endpoint) {
                    filmsApi.push(movie);
                }
            }
        }
        return filmsApi
    } catch
        (error) {
        return error;
    }
}


module.exports = {
    fetchAllApi,
}
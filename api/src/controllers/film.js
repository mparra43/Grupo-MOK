const {response} = require('express');
const {Film} = require('../models/Film');
const {fetchAllApi} =require('../helpers/fetchApi');


const categoryAll = async (req, res = response) => {
    const {category} = req.query;
    try {
        const movies = await fetchAllApi(category);
        return res.status(201).json(movies);
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
const stateFilms = async (req, res = response) => {
    try {
        const { count, rows }  = await Film.findAndCountAll();
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
const addFilms = async (req, res = response) => {
    const {uid, title, state, category, picture, year } = req.body;

    try {
        let newRegister = await Film.create({
            uid,
            title,
            state,
            category,
            picture,
            year,
        });
        return res.status(201).json({ok: true, msg: "se creo un estado de alquiler"});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}


module.exports = {
    categoryAll,
    stateFilms ,
    addFilms,
}
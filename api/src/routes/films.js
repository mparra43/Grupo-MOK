/* rutas del pokemons */
const {Router} = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {check} = require('express-validator');
const {validateInput} = require('../middlewares/validateInput');
const { categoryAll, stateFilms ,addFilms }= require('../controllers/film');
const router = Router();


router.get('/category', categoryAll);
router.get('/state', stateFilms );
router.post('/addPokemon',
    [// middleware de express validator
            check('uid', 'el id es obligatorio').isLength({min: 2}),
            check('title', 'El nombre es obligatorio').not().isEmpty(),
            check('state', 'El state es obligatorio').not().isEmpty(),
            check('category', 'La categoría es obligatorio').not().isEmpty(),
            check('picture', 'la imagen es obligatoria').not().isEmpty(),
            check('year', 'el año es obligatorio').not().isEmpty(),
        validateInput, validateJwt
    ],
    addFilms);


module.exports = router;

const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json(movies)
	} catch (error) {
		return next(error)
	}
});

module.exports = router;

//POST
router.post('/create', async (req, res, next) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
    
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
        } catch (error) {
        next(error);
        }
    });

//PUT
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const movieModify = new Movie(req.body)
        movieModify._id = id 
        const movieUpdated = await Movie.findByIdAndUpdate(id , movieModify)
        return res.status(200).json(movieUpdated)
    } catch (error) {
        return next(error)
    }
});

//DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        await Movie.findByIdAndDelete(id);
        return res.status(200).json('Movie deleted!');
    } catch (error) {
        return next(error);
    }
});

module.exports = router;

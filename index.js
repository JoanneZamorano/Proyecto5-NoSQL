const express = require('express');
const {connect} = require('./utils/db')
const Movie = require('./models/Movie');
const movieRoutes = require('./routes/movie.routes')

connect();
const PORT = 3000;
const server = express();
const router = express.Router();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/movies', movieRoutes);

//Rutas no especificadas
server.use((req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
    });

//Errores
server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log(`Server running in <http://localhost>:${PORT}`);
});



//GET Movies
router.get('/movies', async (req, res) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json(movies)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//GET Movies por ID
router.get('/movies/id/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const movie = await Movie.findById(id);
		if (movie) {
			return res.status(200).json(movie);
		} else {
			return res.status(404).json('No movie found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

//GET Movies por TITLE
router.get('/movies/title/:title', async (req, res) => {
	const {title} = req.params;

	try {
		const movieByTitle = await Movie.find({ title });
		return res.status(200).json(movieByTitle);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//GET Movies por GENRE
router.get('/movies/genre/:genre', async (req, res) => {
	const {genre} = req.params;

	try {
		const movieByGenre = await Movie.find({ genre });
		return res.status(200).json(movieByGenre);
	} catch (err) {
		return res.status(500).json(err);
	}
});

// GET Movies por YEAR
router.get('/movies/year/:year', async (req, res) => {
	const {year} = req.params;

	try {
		const movieByYear = await Movie.find({ year: {$gt:year} });
		return res.status(200).json(movieByYear);
	} catch (err) {
		return res.status(500).json(err);
	}
});


server.use('/', router);

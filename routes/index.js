const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
	dest: 'tmp/',
	storage,
	limits: { fileSize: 3 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		if(!file.mimetype.includes('image/png')){ // si le mimetype du fichier est différent de png
			cb(new Error('Bad file type')) // retourne un erreur
		}
		cb(null, true) // sinon OK
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/monupload', upload.array('monfichier', 3), function (req, res, next) {
  console.log(req.files);
  res.end();
});

/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;

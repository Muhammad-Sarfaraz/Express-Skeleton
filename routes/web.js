const router = require('express').Router();
const webController = require('../app/controllers/WebController');
const newController = require('../app/controllers/NewController');

// Home Route...
router.get('/', webController.list);
router.get('/view', webController.view);
router.post('/add', webController.save);
router.get('/update/:id', webController.edit);
router.post('/update/:id', webController.update);
router.get('/delete/:id', webController.delete);

// Post Route...
router.get('/new', newController.index);
router.get('/post/update/:id', newController.show);

module.exports = router;
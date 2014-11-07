var express = require('express'),
	router = express.Router(),

    // temp file system reading
    fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/*
 * Routes
 */
 // Best practice would be setting up separate route files for different parts
 // of your app. For example, the users route file might contain routes for 
 // adding users, deleting them, updating them, and so forth, while a new 
 // route file called "locations" might handle adding, editing, deleting 
 // and displaying location data (in an app for which that was required). 
 // In this case, to keep things simple, we're going to do everything in 
 // the index router.

// Form.html route example for static file 
router.get('/form', function(req, res) {
    fs.readFile('./public/form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});


// Hello World route example with Jade view
router.get('/helloworld', function(req, res) {
	res.render( 'helloworld', { title: 'Hello, World!' } );
});

module.exports = router;

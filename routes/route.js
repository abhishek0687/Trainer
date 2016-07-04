var session = require('express-session');
var bodyParser = require('body-parser');
var courses = require('../controllers/courses');
var trainer = require('../controllers/trainer');
var db = require('../core/db');

exports.serve=function(app,express){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	

	app.get('/admin',function(req,resp){
		rsp.end();
	});

	app.get('/courses',function(req,resp){
		courses.getCourses(req,resp);
	})

	app.post('/courses',function(req,resp){
		courses.addCourses(req,resp,req.body);
	});

	app.post('/subcategory',function(req,resp){
		//console.log(req.body);
		courses.addSubCourses(req,resp,req.body);
	});

	app.post('/trainer',function(req,resp){
		//console.log(req.body);
		trainer.addTrainer(req,resp,req.body);
	});

	app.get('/trainer/:category',function(req,resp){
		var category = req.params.category;
		trainer.getAllTrainer(req,resp,category);
	});	

	app.put('/trainer/:category/:id',function(req,resp){
		var id = req.params.id;
		var category = req.params.id;
		trainer.updateTrainer(req,resp,id,category,req.body);
	})

	app.get('/trainer/:category/:id',function(req,resp){
		var id = req.params.id;
		var category = req.params.id;
		trainer.getTrainer(req,resp,id,category);
	})


	app.get('/',function(req,resp){
		console.log(__dirname);
		resp.sendfile('index.html', {'root': __dirname +'/public'});
	})

}


/*

	app.get('/courses',function(req,resp){
		//console.log(req.body);
		trainer.getCourses(req,resp);
	});

	app.get('/courses/:name',function(req,resp){
		//console.log(req.body);
		var name = req.params.name;
		trainer.getTrainer(req,resp);
	});


*/
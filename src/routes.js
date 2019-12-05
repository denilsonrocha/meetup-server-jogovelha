import HomeController from './app/controllers/HomeController';

var express = require('express');
var router = express.Router();



router.get('/', HomeController.store);

module.exports = router;



// import { Router } from 'express';

// import HomeController from './app/controllers/HomeController';


// const routes = new Router()

// routes.get('/', HomeController.store);

// export default routes;
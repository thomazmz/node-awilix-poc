const { makeInvoker } = require('awilix-express');

const resourceController = ({ resourceService }) => {
	return {
		controllerMethod: (req, res, next) => {
			console.log(`Controller method has benn called`);
			resourceService.serviceMethod('resourceController');
			res.status(200).send('Ok');
		}
	}
}
 
module.exports = makeInvoker(resourceController);
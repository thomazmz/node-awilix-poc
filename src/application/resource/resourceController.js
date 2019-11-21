import { makeInvoker } from 'awilix-express';

const resourceController = ({ resourceService }) => {
	return {
		controllerMethod: (req, res, next) => {
			console.log(`Controller method has benn called`);
			resourceService.serviceMethod('resourceController');
			res.status(200).send('Ok');
		}
	}
}

export default makeInvoker(resourceController);

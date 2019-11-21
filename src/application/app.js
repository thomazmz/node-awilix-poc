import express from 'express';
import { createContainer, Lifetime, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import routes from './resource/resourceRoutes';

const container = createContainer()

container.loadModules(['../domain/**/*.js'], {
	formatName: 'camelCase',
	cwd: __dirname,
	resolverOptions: {
		lifetime: Lifetime.SCOPED,
		register: asClass
	}
});

const application = express();

application.use(scopePerRequest(container));
application.use('/resource', routes);

application.listen(4040, () => {
	console.log(`Successfully listening on port 4040.`);
});
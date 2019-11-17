const express = require('express');
const awilix = require('awilix');
const { scopePerRequest } = require('awilix-express')

const container = awilix
	.createContainer()
	.loadModules([ '../domain/**/*.js' ], { formatName: 'camelCase' });

const application = express();

application.use(scopePerRequest(container));
application.use('/resource', require('./resource/resourceRoutes'));

application.listen(4040, () => {
	console.log(`Successfully listening on port 4040.`);
});




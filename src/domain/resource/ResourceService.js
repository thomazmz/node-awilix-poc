class ResourceService {
	constructor({ resourceRepository }) {
		this.resourceRepository = resourceRepository;
	}

	serviceMethod(source) {
		console.log(`Service method has been called from ${source}`);
		return this.resourceRepository.repositoryMethod('resourceService');
	}
}

export default ResourceService;
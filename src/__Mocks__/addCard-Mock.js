import localStorageMock from './localStorageMock.js';

const addCard = (project) => {
  if (project.title === '' || project.url === '') {
    throw new Error('Fail add card');
  }

  localStorageMock.saveToLocal('test', project);

  return project.index;
};

export default addCard;
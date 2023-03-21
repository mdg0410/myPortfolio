/* @jest-environment jsdom */

import project from '../modules/Card-test.js';
import addCard from '../__Mocks__/addCard-Mock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('Add Cards Validator', () => {
  // Test Add new project
  test('Add new project should be one', () => {
    expect(addCard(project)).toHaveLength(1);
  });

  // Test if the new project is save in localstorage
  test('The value of the first card is expected to be one', () => {
    expect(localStorageMock.getFromLocal('test')).toHaveLength(1);
  });

  test('Add new project should be two', () => {
    expect(addCard(project)).toHaveLength(2);
  });

  test('The value of the second card is expected to be two', () => {
    expect(localStorageMock.getFromLocal('test')[1].index).toEqual(2);
  });
});
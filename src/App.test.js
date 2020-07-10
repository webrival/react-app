import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('Snapshot App Component', () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

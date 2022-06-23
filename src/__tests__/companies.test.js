import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Companies from '../features/company/company';

describe('Companies test', () => {
  it('renders companies page', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Companies />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});

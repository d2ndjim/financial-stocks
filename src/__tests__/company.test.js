import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Company from '../components/companies';

describe('Company test', () => {
  it('renders company', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Company />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});

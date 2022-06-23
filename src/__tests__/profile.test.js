import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../features/profile/profile';

describe('Profile test', () => {
  it('renders Profile', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

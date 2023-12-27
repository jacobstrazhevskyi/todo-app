import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import { MuiThemeWrapper } from './components/MuiThemeWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <Provider store={store}>
      <MuiThemeWrapper />
    </Provider>
  </Router>,
);

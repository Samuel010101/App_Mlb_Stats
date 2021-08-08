import { Provider } from 'react-redux';
import { store } from '../state';
import { StatsList } from './StatsList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Stats</h1>
        <StatsList />
      </div>
    </Provider>
  );
};

export default App;

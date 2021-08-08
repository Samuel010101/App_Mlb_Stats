import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useActions';

export const StatsList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchStats } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  //   const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchStats(term);
    // dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((MlbPlayer) => <div key={MlbPlayer}>{MlbPlayer}</div>)}
    </div>
  );
};

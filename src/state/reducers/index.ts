import { combineReducers } from "redux";
import repositoriesReducers from './repositoriesReducers';

const reducers = combineReducers({
    repositories: repositoriesReducers,
});

export default reducers;

// Esta linea me permite asignar correctamente el tipado de esta linea de codigo siguiente en el componente RepositoriesList
// const { data, error, loading } = useSelector((state) => state.repositories);
export type RootState = ReturnType<typeof reducers>;
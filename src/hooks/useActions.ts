// Creamos este useAction como un hook para hacer binding a los action-creators y simplificar(optimizar) el script 
// en la funcion onSubmit del RepositoriesList

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useAction = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
}
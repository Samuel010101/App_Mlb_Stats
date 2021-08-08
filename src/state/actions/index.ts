import { ActionType } from "../action-types";


// // Definimos la interface propia para el action que recibe la función 
// interface Action {
//     type: string;
//     payload?: any;
// }


interface SearchStatsAction {
    type: ActionType.SEARCH_STATS;
}

interface SearchStatsSuccessAction {
    type: ActionType.SEARCH_STATS_SUCCESS;
    payload: string & Number []
}

interface SearchStatsErrorAction {
    type: ActionType.SEARCH_STATS_ERROR;
    payload: string
}

export type Action =
    | SearchStatsAction
    | SearchStatsSuccessAction
    | SearchStatsErrorAction
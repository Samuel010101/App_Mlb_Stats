import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchStats = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_STATS
        });

        try{
            const { data } = await axios.get(
                'http://localhost:3500/stat/search', 
                {   
                    params: {
                        text: term,
                    }
                });
                console.log(data);

                const stats = data.mlbplayers.map((result: any) => {
                    return result.MlbPlayer
                   
                });
                

                dispatch({
                    type: ActionType.SEARCH_STATS_SUCCESS,
                    payload: stats
                });

        } catch(err){
            dispatch({
                type: ActionType.SEARCH_STATS_ERROR,
                payload: err.message
            })
        }


    }
}
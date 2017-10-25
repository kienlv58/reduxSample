/**
 * Created by kien.lovan on 10/23/2017.
 */

import {TANG,GIAM} from '../actions'
const DEFAULT_STATE = {data:'',current:0};
export default (state = DEFAULT_STATE,action)=> {
    switch (action.type){
        case TANG:
            return {...state,current:state.current+1};
        case GIAM:
                return{...state,current:state.current-1};

        default:
            return state;

    }
}
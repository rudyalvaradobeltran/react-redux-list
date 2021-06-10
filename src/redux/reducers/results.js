import { type as findResultsType } from '../actions/findResults';
import { filter } from '../../utils/filters';
import items from '../../data/items';
const defaultState = [];

function reducer(state = defaultState, { type, payload }){
    switch (type){
        case findResultsType: {
            return filter(items, payload, 'title');
        }
        default:
            return state;
    }
}

export default reducer;
import { type as findSuggestionsType } from '../actions/findSuggestions';
import { filter } from '../../utils/filters';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }){
    switch (type){
        case findSuggestionsType: {
            return filter(items, payload, 'title');
        }
        default:
            return state;
    }
}

export default reducer;
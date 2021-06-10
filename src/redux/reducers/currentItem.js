import { type as findCurrentItemType } from '../actions/findCurrentItem';
import { find } from '../../utils/filters';
import items from '../../data/items';
const defaultState = {};

function reducer(state = defaultState, { type, payload }){
    switch (type){
        case findCurrentItemType: {
            var foundItem = find(items, payload, 'id');
            return foundItem ? foundItem : {};
        }
        default:
            return state;
    }
}

export default reducer;
import * as types from '../constants';
import initialState from '../initialState';

const pathReducer = (path = [...initialState.path], {type, payload}) => {
    switch (type) {
        case types.path.OPEN:
            path.push(payload);
            return [...path];

        case types.path.CLOSE:
            return path.slice(0, payload);
    
        default:
            return path;
    }
}

export default pathReducer;
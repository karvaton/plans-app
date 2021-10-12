import * as types from '../constants';
import initialState from '../initialState';

const pathReducer = (path = [...initialState.path], {type, payload}) => {
    switch (type) {
        case types.path.OPEN:
            path.push(payload);
            return path;

        case types.path.CLOSE:
            path.pop();
            return path;
    
        default:
            return path;
    }
}

export default pathReducer;
import * as types from '../constants';

export const open = dialogName => ({
    type: types.dialog.OPEN,
    payload: dialogName,
});

export const close = {
    type: types.dialog.CLOSE,
    payload: null,
};
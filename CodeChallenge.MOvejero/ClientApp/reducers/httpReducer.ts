import { ActionTypes } from '../common/constants/actionTypes';

export const httpReducer = (state: boolean = true, action: any) => {
    switch (action.type) {
        case ActionTypes.HTTP_CALL_START:
            return handleHttpStart(state, action.payload);
        case ActionTypes.HTTP_CALL_END:
            return handleHttpEnd(state, action.payload); 
    }
    return state;
};

const handleHttpStart = (state: boolean, payload: boolean) => {
    return payload;
};

const handleHttpEnd = (state: boolean, payload: boolean) => {
    return payload;
};
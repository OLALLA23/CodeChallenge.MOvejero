import { ActionTypes } from '../common/constants/actionTypes';
import PhoneModel from '../models/PhoneModel';

export const phoneReducer = (state: PhoneModel[] = [], action: any) => {
    switch (action.type) {
        case ActionTypes.LOAD_LIST_PHONE:
            return handleloadListPhoneAction(state, action.payload);
    }
    return state;
};

const handleloadListPhoneAction = (state: PhoneModel[], payload: PhoneModel[]) => {
    return payload;
};

import { ActionTypes } from "../../../common/constants/actionTypes";


 export const loadCallStart = () => ({
    type: ActionTypes.HTTP_CALL_START,
    payload: true,
});

export const loadCallEnd = () => ({
    type: ActionTypes.HTTP_CALL_END,
    payload: false,
});
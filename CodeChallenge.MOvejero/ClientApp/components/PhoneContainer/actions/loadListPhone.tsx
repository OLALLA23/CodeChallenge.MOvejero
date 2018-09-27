import { phonesAPI } from "../../../api";
import { ActionTypes } from "../../../common/constants/actionTypes";
import PhoneModel from "../../../models/PhoneModel";
import { loadCallStart, loadCallEnd } from "../../SpinnerContainer/actions/loadSpinner";



export const loadListPhoneAction = () => (dispatch: any) => {

    dispatch(loadCallStart());

    phonesAPI.GetDetailsPhones().then((result) => {
        dispatch(loadListPhoneActionResult(result));
    }).then(() => { dispatch(loadCallEnd());});
     
    const loadListPhoneActionResult = (result: PhoneModel[]) => ({
        type: ActionTypes.LOAD_LIST_PHONE,
        payload: result,
        meta: {
            httpEnd: true
        }
    });

}
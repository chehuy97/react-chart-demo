import { ResponeType } from "./../services/api/index";
import { AxiosResponse } from "axios";
import { LoginRequest, Action } from "./../redux/AuthRedux";
import { call } from "redux-saga/effects";
import { login } from "../services/api";

export function* loginAccount(action: Action<LoginRequest>) {
  console.log("TRIGGER LOGIN");
  try {
    const response: AxiosResponse<ResponeType<any>> = yield call(
      login,
      action.payload.user
    );
    console.log('response is '+response);
    
    if (response) {
      action.payload.onSuccess(response.data);
    } else {
      action.payload.onError("Login fail");
    }
  } catch(err) {
    action.payload.onError(err.response.data.errorMessage);
  }
}

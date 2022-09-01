import ErrorResponse from '../network/responses/ErrorResponse';
// import authenticationAsyncActions from './actions/authentication.action';
import {requestActions} from './slices/request.slice';
import {CPA} from './types';

const postErrorRequest = (
  state: any,
  action: CPA<ErrorResponse>,
  initialState: any,
  notifyRequest: boolean = true,
) => {
  // if (action.payload.error.status === 401) {
  // 	action.dispatch(authenticationAsyncActions.signOut());
  // 	state = initialState;
  // }

  if (notifyRequest) {
    action.dispatch(
      requestActions.rejected({
        name: action.type,
        message: '',
        payload: {...action.payload.error},
      }),
    );
  }

  return state;
};

export default postErrorRequest;

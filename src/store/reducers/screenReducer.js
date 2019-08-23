import { TOGGLE_ACTIVITY_INDICATOR } from '../constants';

const initialState = {
  activityIndicator: false,
};

export default function screenReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTIVITY_INDICATOR:
      return {
        ...state,
        activityIndicator: action.payload.activityIndicator,
      };
    default:
      return state;
  }
}

import { TOGGLE_ACTIVITY_INDICATOR } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const toggleActivityIndicator = value => ({
  type: TOGGLE_ACTIVITY_INDICATOR,
  payload: {
    activityIndicator: value,
  },
});

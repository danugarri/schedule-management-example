import { types } from '../types/types';

const initialState = {
  schedule: {},
  loading: false,
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.schedule:
      return {
        schedule: action.payload.schedule,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

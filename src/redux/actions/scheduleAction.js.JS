import { types } from '../types/types';

export const scheduleAction = (schedule, loading) => {
  return {
    type: types.schedule,
    payload: {
      schedule,
      loading,
    },
  };
};

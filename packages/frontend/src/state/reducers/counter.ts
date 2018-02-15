import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './../constants/index';
import { AnyAction } from 'redux';

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

export const counter = (state: ICounterState = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

import initialState from "./initialState";
import { SET_CURRENCY_EXCHANGE } from "./types";

const rootReducer = (state = initialState.currency, action) => {
  switch (action.type) {
    case SET_CURRENCY_EXCHANGE:
      return {
        ...state,
        currency: action.payload.rates,
      };
    default:
      return state;
  }
};

export default rootReducer;

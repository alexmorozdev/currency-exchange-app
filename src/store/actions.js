import { SET_CURRENCY_EXCHANGE } from "./types";

export function fetchCurrencyExchange() {
  return async (dispatch) => {
    const res = await fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=d38b95c2d66d22be55d29e6b748865ea&base=EUR&symbols=UAH,USD"
    );
    const json = await res.json();
    dispatch(addCurrencyExchange(json));
  };
}

export const addCurrencyExchange = (payload) => ({
  type: SET_CURRENCY_EXCHANGE,
  payload,
});

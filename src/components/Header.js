import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyExchange } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const eurRate = useSelector((state) => state.currency.UAH)?.toFixed(2);
  const eurUsdRate = useSelector((state) => state.currency.USD);
  const usdRate = (eurRate / eurUsdRate)?.toFixed(2);

  useEffect(() => {
    dispatch(fetchCurrencyExchange());
  }, []);

  return (
    <div className="header">
      <h3>Actual currency exchange rate</h3>
      <div>1 USD: {usdRate} UAH</div>
      <div>1 EUR: {eurRate} UAH</div>
    </div>
  );
}

export default Header;

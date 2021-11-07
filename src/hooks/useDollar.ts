import { useEffect, useState } from 'react';
import axios from "axios"

const useDollar = () => {
  const [dollarPriceArs, setDollarPriceArs] = useState(0);

  useEffect(() => {
    async function getDollarPriceInArs() {
      try {
        const prices = await axios.get('https://criptoya.com/api/dolar');
        const prom = (prices.data.blue + prices.data.ccb) / 2;
        setDollarPriceArs(prom);
      } catch (error) {
        console.log('Error in get Dollar Price Ars',error);
      }
    }

    getDollarPriceInArs();
  }, []);

  return {
    dollarPriceArs,
  }
}

export default useDollar;

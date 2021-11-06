import { useEffect, useState } from 'react';
import axios from "axios"

const useDollar = () => {
  const [dollarPriceArs, setDollarPriceArs] = useState(0);

  useEffect(() => {
    async function getDollarPriceInArs() {
      const prices = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
      const blueDollar = prices.data[1].casa.venta;
      const array = blueDollar.split(',');
      const dollar = Number(array[0]) + (Number(array[1])/100);
      setDollarPriceArs(dollar);
    }
    
    getDollarPriceInArs();
  }, []);

  return {
    dollarPriceArs,
  }
}

export default useDollar;

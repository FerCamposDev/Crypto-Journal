import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Refresh from '@mui/icons-material/Refresh';

import { Crypto } from '../../types/types';
import useDollar from '../../hooks/useDollar';

interface CardProps {
  crypto: Crypto
  currentPrice: number
  handlePrice: () => void
}

export default function CryptoCard(props: CardProps) {
  const { crypto, currentPrice, handlePrice } = props;
  const [total, setTotal] = useState(currentPrice * crypto.amount);
  const { dollarPriceArs } = useDollar();
  const [totalArs, setTotalArs] = useState(total * dollarPriceArs);

  useEffect(() => {
    const newTotal = currentPrice * crypto.amount;
    setTotal(newTotal);
    setTotalArs(newTotal * dollarPriceArs);
  }, [currentPrice, dollarPriceArs]);

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader sx={{ m: 0, pb: 0 }}
        avatar={
          <Avatar src={crypto.image} />
        }
        action={
          <IconButton aria-label="refresh" onClick={handlePrice}>
            <Refresh />
          </IconButton>
        }
        title={`${crypto.name} - ${crypto.symbol}`}
        subheader={`Total u$d ${total.toFixed(2)}`}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          Date: {crypto.date.toLocaleDateString()}
          <br />
          Balance: {crypto.amount}
          <br />
          Purchase price: u$d {crypto.price}
          <br />
          Current price: u$d {currentPrice.toFixed(2)}
          <br />
          Ars: $ {totalArs.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
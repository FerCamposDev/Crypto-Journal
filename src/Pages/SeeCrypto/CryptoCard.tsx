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
import { Grid } from '@mui/material';

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
  }, [currentPrice, dollarPriceArs, crypto.amount]);

  return (
    <Card sx={{ width: '100%', mb: '15px' }}>
      <CardHeader sx={{ m: 0, pb: 0 }}
        avatar={
          <Avatar src={crypto.image} />
        }
        action={
          <IconButton aria-label="refresh" onClick={handlePrice}>
            <Refresh />
          </IconButton>
        }
        title={crypto.symbol.toUpperCase()}
        subheader={<><b>Balance:</b> {crypto.amount}</>}
      />
      <CardContent >
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <b>Date:</b> {crypto.date.toLocaleDateString()}.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              <b>Purchase price:</b>&nbsp;u$d {crypto.price}
              <br />
              <b>Current price:</b>&nbsp;u$d {currentPrice.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" align='center'>
              <br />
              <b>Total: u$d</b> {total.toFixed(2)} - <b>ARS:</b> $ {totalArs.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
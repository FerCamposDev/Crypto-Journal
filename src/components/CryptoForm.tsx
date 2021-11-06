
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { NEW_CRYPTO } from '../Context/InitialState';
import useMyCryptos from '../hooks/useMyCryptos';
import { Crypto } from '../types/types';
import uniqueString from 'unique-string';

const CryptoForm = ({ editCrypto }: { editCrypto?: Crypto }) => {
  const {
    myNewCrypto,
    setMyNewCrypto,
    addMyNewCrypto,
    setCryptoEdited,
  } = useMyCryptos();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value :string | Date = e.target.value;
    const name = e.target.name;

    if (name === 'date') {
      value = new Date(value);
    }

    if (editCrypto) {
      (editCrypto as any)[name] = value;
    } else {
      (myNewCrypto as any)[name] = value;
      setMyNewCrypto(myNewCrypto);
    }
  }

  const clearNewCrypto = () => {
    let newCrypto = { ...NEW_CRYPTO };
    newCrypto.id = uniqueString();
    setMyNewCrypto(newCrypto);
  }

  const saveCrypto = () => {
    if (editCrypto) {
      setCryptoEdited(editCrypto);
    } else {
      addMyNewCrypto();
    }
  }

  return (
    <Grid container alignItems='center' justifyContent='space-around'>
      <Grid item xs={5} sm={5} sx={{ m: 1 }}>
        <TextField
          fullWidth
          variant="standard"
          label="Name"
          value={(editCrypto && editCrypto.name) || myNewCrypto.name}
          disabled
        />
      </Grid>
      <Grid item xs={5} sm={5} sx={{ m: 1 }}>
        <TextField
          fullWidth
          variant="standard"
          label="Symbol"
          value={(editCrypto && editCrypto.symbol) || myNewCrypto.symbol}
          disabled
        />
      </Grid>
      <Grid item xs={12} sm={3} sx={{ m: 1 }}>
        <TextField
          label="Date"
          type="date"
          defaultValue={myNewCrypto.date.toISOString().split('T')[0]}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name='date'
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={3} sx={{ m: 1 }}>
        <TextField
          fullWidth
          label="Amount"
          defaultValue={(editCrypto && editCrypto.amount) || myNewCrypto.amount || ''}
          onChange={handleChange}
          name='amount'
          type='number'
          placeholder='0.01234567'
        />
      </Grid>
      <Grid item xs={12} sm={3} sx={{ m: 1 }}>
        <TextField
          fullWidth
          label="Purchase price (usd)"
          defaultValue={(editCrypto && editCrypto.price) || myNewCrypto.price || ''}
          onChange={handleChange}
          name='price'
          type='number'
          placeholder='2.56'
        />
      </Grid>
      <Grid container justifyContent='space-around'>
        {
          !editCrypto &&
          <Grid item xs={12} sm={5}>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              sx={{ my: 1 }}
              onClick={clearNewCrypto}
            >
              CLEAR
            </Button>
          </Grid>
        }
        <Grid item xs={12} sm={5}>
          <Button
            variant='contained'
            fullWidth
            sx={{ my: 1 }}
            onClick={saveCrypto}
          >
            {editCrypto ? 'EDIT' : 'ADD'}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CryptoForm;

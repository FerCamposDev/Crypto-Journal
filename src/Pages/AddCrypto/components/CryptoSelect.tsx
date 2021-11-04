import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';

import useCryptos from '../../../hooks/useCryptos';
import { DialogContent } from '@mui/material';
import useMyCryptos from '../../../hooks/useMyCryptos';
import { CryptoGecko } from '../../../types/types';

export interface CryptoDialogProps {
  open: boolean;
  onClose: (value?: CryptoGecko) => void;
}

function CryptoDialog(props: CryptoDialogProps) {
  const { onClose, open } = props;

  const { cryptos } = useCryptos();
  const { myNewCrypto, setMyNewCrypto } = useMyCryptos();
  const [cryptoList, setCryptoList] = useState<Array<CryptoGecko>>([]);

  useEffect(() => {
    setCryptoList(cryptos)
  }, [cryptos]);

  const handleClose = () => {
    onClose();
    setCryptoList(cryptos);
  };

  const handleListItemClick = (value: CryptoGecko) => {
    myNewCrypto.symbol = value.symbol;
    myNewCrypto.name = value.name;
    myNewCrypto.image = value.image;
    myNewCrypto.current_price = value.current_price;
    setMyNewCrypto(myNewCrypto);

    onClose();
    setCryptoList(cryptos);
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filtered = cryptos.filter(crypto => crypto.name.toLowerCase().includes(value) || crypto.symbol.includes(value))
    setCryptoList(filtered);
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth >
      <DialogTitle>
        Select crypto
      </DialogTitle>
      <DialogContent>
        <TextField
          sx={{ mt: 2 }}
          label="Search"
          onChange={search}
          fullWidth
        />
        <List sx={{ pt: 0, minHeight: '70vh' }}>
          {cryptoList.map((crypto) => (
            <ListItem button
              onClick={() => handleListItemClick(crypto)}
              key={crypto.symbol}
            >
              <ListItemAvatar>
                <Avatar src={crypto.image} />
              </ListItemAvatar>
              <ListItemText primary={`${crypto.name} (${crypto.symbol})`} />
            </ListItem>
          ))}
        </List>
      </  DialogContent>
    </Dialog>
  );
}

export default function CryptoSelect() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        fullWidth
      >
        Select crypto
      </Button>
      <CryptoDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
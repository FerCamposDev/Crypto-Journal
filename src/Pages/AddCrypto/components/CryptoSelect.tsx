import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import useCryptos from '../../../hooks/useCryptos';

export interface CryptoDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function CryptoDialog(props: CryptoDialogProps) {
  const { cryptos } = useCryptos();
  const [cryptoList, setCryptoList] = useState<Array<any>>([]);

  useEffect(() => {
    setCryptoList(cryptos)
  }, [cryptos]);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    setCryptoList(cryptos);
  };

  const handleListItemClick = (value: any) => {
    onClose(value);
    setCryptoList(cryptos);
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = cryptos.filter( crypto => crypto.name.includes(value) || crypto.symbol.includes(value))
    setCryptoList(filtered);
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle>Select crypto</DialogTitle>
      <TextField
        label="Search"
        onChange={search}
      />
      <List sx={{ pt: 0 }}>
        {cryptoList.map((crypto) => (
          <ListItem button
            onClick={() => handleListItemClick(crypto.name)}
            key={crypto.symbol}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}
                src={crypto.image}
              />
            </ListItemAvatar>
            <ListItemText primary={crypto.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function CryptoSelect() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        fullWidth
      >
        Select crypto
      </Button>
      <CryptoDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
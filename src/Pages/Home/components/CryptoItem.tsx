import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';

import { useHistory } from 'react-router';
import { Crypto } from '../../../types/types';
import useMyCryptos from '../../../hooks/useMyCryptos';
import Typography from '@mui/material/Typography'

interface Props {
  crypto: Crypto
}

const CryptoItem = ({ crypto }: Props) => {
  const history = useHistory();
  const { deleteCrypto } = useMyCryptos();
  const total = crypto.current_price * crypto.amount;

  const seeCrypto = () => {
    history.push(`/see/${crypto.symbol}`)
  }

  const editCrypto = () => {
    history.push(`/edit/${crypto.id}`)
  }

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton onClick={seeCrypto}>
            <Visibility />
          </IconButton>
          <IconButton onClick={editCrypto}>
            <Edit />
          </IconButton>
          <IconButton edge="end" onClick={() => deleteCrypto(crypto.id)}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar src={crypto.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="body1">
            {crypto.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {total.toFixed(2)}
          </Typography>
        }
        secondary={`${crypto.amount} `}
      />
    </ListItem>
  )
}

export default CryptoItem

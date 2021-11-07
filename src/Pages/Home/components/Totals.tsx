import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Refresh from '@mui/icons-material/Refresh';

import Typography from '@mui/material/Typography'
import { Grid, ListItemSecondaryAction } from '@mui/material';

interface Props {
  dollars: number
  ars: number
  refreshTotals: ()=> void
}

const Totals = (props: Props) => {
  const { dollars, ars, refreshTotals } = props;
  return (
    <ListItem sx={{
      borderRadius: '6px',
      border: 'solid 1px',
    }}>
      <ListItemText
        primary={
          <Grid container alignItems='center'>
            <Grid item xs={5} sm={5}>
              <Typography variant="subtitle2" align='center'>
                USD
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="body1" >
                $ {dollars.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Grid container alignItems='center'>
            <Grid item xs={5} sm={5}>
              <Typography variant="subtitle2" align='center'>
                ARS
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="body1" >
                $ {ars.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <ListItemSecondaryAction >
        <IconButton size='small' onClick={refreshTotals}>
          <Refresh fontSize='small' />
        </IconButton>
      </ListItemSecondaryAction >
    </ListItem>
  )
}

export default Totals

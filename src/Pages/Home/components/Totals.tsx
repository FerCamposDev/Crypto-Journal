import { Card, CardHeader, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Refresh from '@mui/icons-material/Refresh';

interface Props {
  dollars: number
  ars: number
  refreshTotals: () => void
}

const Totals = (props: Props) => {
  const { dollars, ars, refreshTotals } = props;
  return (
    <Card sx={{
      borderRadius: '6px',
      border: 'solid 1px',
    }}>
      <CardHeader
        action={
            <IconButton onClick={refreshTotals}>
              <Refresh />
            </IconButton>
        }
        title={
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
        subheader={
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
    </Card>
  )
}

export default Totals

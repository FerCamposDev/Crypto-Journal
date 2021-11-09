import Page from "../../components/Page/Page"
import image404 from '../../assets/images/404.jpeg';
import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router";

const Page404 = () => {
  const history = useHistory();

  return (
    <Page title='Page not found'>
      <Grid container justifyContent='center' >
        <img 
          src={image404} 
          alt='404'
        />
      </Grid>
      <Grid container justifyContent='center'>
        <Button onClick={() => history.push('/')}>Go to home</Button>
      </Grid>
      <Grid container justifyContent='center'>
        <Button onClick={() => history.push('/add')}>Add crypto</Button>
      </Grid>
    </Page>
  )
}

export default Page404

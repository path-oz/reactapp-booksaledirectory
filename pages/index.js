import {
  Button,
  Typography,
  Grid,
  Container,
  CssBaseline,
} from "@mui/material";
import DropDown from "../components/DropDown";
import USAMaps from "../components/USAMap";
import TestCard from "../components/TestCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
      background: '#fffffe'
      
  }

})

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.root}>
          <Container maxWidth="md">
            
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              sx={{ display: { xs: "none", md:"block", xl: "block" } }}
            >
              {" "}
              Welcome Book Sale Hunter{" "}
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
              sx={{ display: { xs: "block", md:"none", xl: "none" } }}
            >
              {" "}
              Welcome Book Sale Hunter{" "}
            </Typography>
            <Typography sx={{ display: { xs: "none", md:"block", xl: "block" } }} variant="h5" align="center" color="InfoText" paragraph>
              {" "}
              Click a state on the map or click the button below to view book sales{" "}
            </Typography>
            <Typography sx={{ display: { xs: "block", md:"none", xl: "none" } }} variant="h5" align="center" color="InfoText" paragraph>
              {" "}
              Click the button below and choose a state to view book sales{" "}
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <DropDown/>
                </Grid>

                <Grid sx={{ display: { xs: "none", md:"block", xl: "block" } }} item>
                  <USAMaps />
                </Grid>
              </Grid>
            </div>
           
          </Container>
        </div>
      </main>
    </>
  );
}

export default HomePage;

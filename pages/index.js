import {
  Button,
  Typography,
  Grid,
  Container,
  CssBaseline,
} from "@mui/material";
import DropDown from "../components/DropDown";
import USAMaps from "../components/USAMap";


function HomePage() {
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="md">
            
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {" "}
              Home Page{" "}
            </Typography>
            <Typography variant="h5" align="center" color="InfoText" paragraph>
              {" "}
              Description Paragraph{" "}
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

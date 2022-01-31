import {
  Button,
  Typography,
  Grid,
  Container,
  CssBaseline,
} from "@mui/material";
import DropDown from "../components/DropDown";

const newjersey = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              
              New Jersey
            </Typography>
            <DropDown />
          </Container>
        </div>
      </main>
    </>
  );
};

export default newjersey;

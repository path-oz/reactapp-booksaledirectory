import {
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import DropDown from "../components/DropDown";
import BooksaleCards from "../components/BooksaleCards";
import { Grid } from "@mui/material";
import { connectToDatabse } from '../util/mongodb';

export default function newjersey({booksales}) {


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
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <DropDown/>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4} xl={2}>
                <BooksaleCards />
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={2}>
                <BooksaleCards />
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={2}>
                <BooksaleCards />
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={2}>
                <BooksaleCards />
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={2}>
                <BooksaleCards />
              </Grid>
            </Grid>
          </Container>

        </div>
        <div>
          
          {booksales.map((booksale) => (
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
              key={booksale.id}

            >
              {booksale.library} 
              {booksale.address.street}
            </Typography>
            
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabse()

  const data = await db.collection("states").find({}).limit(20).toArray();

  const booksales = JSON.parse(JSON.stringify(data));
  console.log(booksales);
  const filtered = booksales.map(booksale => {
    return {
      library: booksale.library,
      address: booksale.address,
    }

  })

  return {
    props: { booksales: filtered },
  }
}

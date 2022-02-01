import {
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import { connectToDatabase } from '../util/mongodb'

export default function newjersey( ) {


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
            
          </Container>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("states").find({}).limit(20).toArray();

  const booksales = JSON.parse(JSON.stringify(data));
  console.log(booksales);
  const filtered = booksales.map(booksale => {
    return {
      title: booksale.title
    }

  })

  return {
    props: { booksales: filtered },
  }
}

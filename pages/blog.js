import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";


const blog = () => {
    return (
 
        <>
        <CssBaseline />
        <main>
          <div>
            <Container maxWidth="md" >
              <Head>
                <title>Blog</title>
                <meta name="viewport" property="og:title"  key="title" content="initial-scale=1.0, width=device-width" />
              </Head>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                
                
                Blog
              </Typography>
            </Container>
          </div>
        </main>
      </>
    );
  };

export default blog;

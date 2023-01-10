import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <header>
        <Container>
          <Box sx={{ display: "flex", width: "100%" }}>
            <p>Logo</p>

            <Box sx={{ display: "flex", gap: "16px" }}>
              <p>Inicio</p>
              <p>Sobre min</p>
              <p>Contato</p>
            </Box>
          </Box>
        </Container>
      </header>

      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} alignSelf="center">
            <Typography sx={{ fontSize: "32px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              animi nihil voluptas unde eaque facilis, laboriosam quisquam
              explicabo voluptatibus voluptatem ut? Vel ipsa repellat ipsum,
              deleniti dolore neque ex facilis.
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Box sx={{ height: "600px" }}>
              <Spline
                scene="https://prod.spline.design/FsAhk7aJ-Z8PrBxv/scene.splinecode"
                onLoad={() => setLoading(false)}
                style={{ width: "500px", height: "500px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = ({ jsonData, cart, setCart }) => {
  const params = useParams();
  const renderedDataTemp = jsonData.filter((mov) => {
    return mov.id === +params.id;
  });
  const renderedData = renderedDataTemp[0];

  return (
    <Box flex={2} p={4}>
      <Grid container spacing={3}>
        <Grid item sm={12} sx={{ mt: "20px" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 26, textAlign: "center" }}
                color="text.secondary"
                gutterBottom
              >
                {renderedData.title}
              </Typography>
              <Typography variant="h6" component="div">
                Price : {renderedData.price} $
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                onClick={() => {
                  setCart([...cart, renderedData]);
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={6} sx={{ mt: "20px" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              image={renderedData.image}
              sx={{
                width: "16rem",
                height: "20rem",
                display: "block",
                margin: "0 auto",

                // paddingLeft: "23%",
                // paddingRight: "15%px",
              }}
              // sx={{ objectFit: "contain" }}
            />
          </Card>
        </Grid>
        <Card
          sm={6}
          sx={{ minWidth: 275, mt: "20px", mx: "20px", width: "46%" }}
        >
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h6">
              Category : {renderedData.category}
            </Typography>
            <Typography variant="subtitle1">
              <br />
              {`"${renderedData.description}"`}
            </Typography>
            <br />
            <Typography variant="body1">
              <br />
              Customer Rating : {renderedData.rating.rate}
            </Typography>
            <Typography variant="body1">
              <br />
              People reviewed : {renderedData.rating.count}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
    /////////////
  );
};

export default ProductDetails;

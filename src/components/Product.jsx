import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
// import { Box } from "@mui/system";

const Product = ({ mov, cart, setCart }) => {
  return (
    <Grid item sm={3} sx={{ mt: "20px" }}>
      <Card
        sx={{
          // width: "300px",
          // paddingX: "50px",

          height: "100%",
          width: "100%",
          position: "relative",
          paddingBottom: "20px",
        }}
      >
        <CardActionArea>
          <Link
            to={`/products/${mov.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardMedia
              component="img"
              image={mov.image}
              sx={{
                width: "8rem",
                height: "10rem",
                display: "block",
                margin: "0 auto",

                // paddingLeft: "23%",
                // paddingRight: "15%px",
              }}
              // sx={{ objectFit: "contain" }}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"text.primary"}
              >
                {mov.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price : {mov.price} $
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions sx={{ position: "absolute", bottom: "0" }}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setCart([...cart, mov]);
              // console.log(cart);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

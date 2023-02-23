import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartDetails = ({ cart, setCart }) => {
  //   console.log(cart);
  const renderedData = cart.map((mov) => {
    return (
      <Grid key={mov.id} item sm={3} sx={{ mt: "20px" }}>
        <Card
          sx={{
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
                }}
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
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Buy
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                const newCart = cart.filter((item) => item.id !== mov.id);
                setCart(newCart);
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <Box flex={4} p={4}>
      <Typography
        sx={{
          fontSize: 35,
          textAlign: "center",
          backgroundColor: "#e5ffec",
          color: "black",
        }}
        color="text.secondary"
        gutterBottom
      >
        CART PAGE
      </Typography>
      <Grid container spacing={3}>
        {renderedData}
      </Grid>
    </Box>
  );
};

export default CartDetails;

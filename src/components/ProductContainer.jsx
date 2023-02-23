import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Product from "./Product";

const ProductContainer = ({ jsonData, cart }) => {
  const renderedData = jsonData.map((mov) => {
    return <Product key={mov.id} mov={mov} cart={cart} />;
  });
  return (
    <Box flex={4} p={4}>
      <Grid container spacing={3}>
        {renderedData}
      </Grid>
    </Box>
  );
};

export default ProductContainer;

import { Route, Routes } from "react-router-dom";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import ProductDetails from "./components/ProductDetails";
import CartDetails from "./components/CartDetails";
const App = () => {
  //////// - Darkmode - //////////////
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  ////////// - Darkmode - /////////////

  ///////////////////// Fetched Data /////////////////
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setJsonData(response.data);
      setFilteredJsonData(response.data);
    })();
  }, []);
  ///////////////////// Fetched Data /////////////////
  ////////////////searchField///////////////////////////
  const [searchField, setSearchField] = useState("");
  const [filteredJsonData, setFilteredJsonData] = useState([]);
  const searchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    const temp = searchFieldString.replace(/\s+|-/g, "");
    setSearchField(temp);
  };

  useEffect(() => {
    const tempFilteredJson = jsonData.filter((mov) => {
      const str = mov.title.toLowerCase();
      const temp = str.replace(/\s+|-/g, "");
      return temp.includes(searchField);
    });
    setFilteredJsonData(tempFilteredJson);
  }, [jsonData, searchField]);
  //////////////////////searchField///////////////////
  //////////////////////////----Cart----//////////////////////
  const [cart, setCart] = useState([]);
  //////////////////////////----Cart----//////////////////////
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color={"text.primary"}>
        <Navbar
          onChangeHandler={searchChange}
          cart={cart}
          setMode={setMode}
          mode={mode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Box>
                <Stack direction="row" spacing={3} justifyContent="center">
                  <ProductContainer
                    jsonData={filteredJsonData}
                    cart={cart}
                    setCart={setCart}
                  />
                </Stack>
              </Box>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                jsonData={filteredJsonData}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          {/*  */}
          <Route
            path="/cart"
            element={<CartDetails cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;

import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import React, { useState } from "react";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  input: { color: "black" },
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ onChangeHandler, cartValue, setMode, mode }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "	darkslategray" }}>
      <StyledToolbar>
        <Typography variant="h6">
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <CheckroomIcon />
          </Link>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" }, marginLeft: "-15%" }}
        >
          Wrappy
        </Typography>
        {/* // */}

        {/* // */}
        <Search>
          <InputBase placeholder="search here" onChange={onChangeHandler} />
        </Search>
        <Icons>
          <DarkModeIcon />

          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
          <Badge badgeContent={cartValue} color="error">
            <ShoppingCartIcon color="white" />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Jonas</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

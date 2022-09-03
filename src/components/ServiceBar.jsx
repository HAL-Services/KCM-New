import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
const pages = [
  ["service", "Book Service"],
  ["record", "Service Record"],
];
export default function ServiceBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, dispatch } = React.useContext(Context);
  const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("authToken");
    history.push("/");
  };
  return (
    <AppBar
      style={{ backgroundColor: "white", color: "black" }}
      className="service-bar-container"
      position="fixed"
    >
      <Container
        style={{ backgroundColor: "white", color: "black" }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "2rem",
              color: "black",
            }}
          >
            KCM
          </Typography>

          <Box
            style={{ color: "black" }}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              style={{
                color: "black",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  style={{
                    color: "black",
                  }}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    style={{
                      color: "black",
                    }}
                    to={`/${page[0]}`}
                  >
                    <Typography style={{ color: "black", textAlign: "center" }}>
                      {page[1]}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            style={{
              color: "black",
            }}
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KCM
          </Typography>
          <Box
            style={{ justifyContent: "center", color: "black" }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <Link to={`/${page[0]}`}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{ marginRight: "60px", color: "black" }}
                >
                  {page[1]}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="settings" onClick={handleCloseUserMenu}>
                <Link to={`/settings`}>
                  <Button
                    style={{
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Profile
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseUserMenu}>
                <Button
                  style={{
                    color: "black",
                    textAlign: "center",
                  }}
                  onClick={handleClick}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

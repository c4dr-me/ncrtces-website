import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/system";

const pages = [
  { name: "Overview" , sname: "overview"},
  { name: "About Us" , sname: "about"},
  { name: "Tracks", sname: "track"},
  { name: "Submission", sname: "sub"},
  { name: "Committee", sname: "commit"},
  { name: "Schedule", sname: "schedule"},
  { name: "Registration", sname: "reg"},
  { name: "Patrons", sname: "patron"},
  { name: "Contact Us", sname: "contact"},
];

const rotateOpen = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateClose = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [marginTop, setMarginTop] = React.useState("0px");
  const location = useLocation();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));


  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#appbar");
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        if (navbarRect.top <= 0) {
          if (window.innerWidth >= 320) { // Check if the screen size is small
            setMarginTop("6rem"); // Adjust this value as needed
          }
          else if (isMediumScreen) {
            setMarginTop("4rem");
          }else {
            setMarginTop("3.4rem");
          }
        } else {
          setMarginTop(`${navbarRect.bottom}px`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMediumScreen, isSmallScreen]);

  React.useEffect(() => {
    if (isLargeScreen && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isLargeScreen, drawerOpen]);

  return (
    <AppBar
      position="sticky"
      id="appbar"
      sx={{
        background:
          "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        marginBottom: "3px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{
                position: "absolute",
                zIndex: 1300,
                animation: drawerOpen
                  ? `${rotateOpen} 200ms ease-in forwards`
                  : `${rotateClose} 200ms ease-in forwards`,
              }}
            >
              {drawerOpen ? (
                <CloseIcon sx={{ fontSize: 32 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 32 }} />
              )}
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              PaperProps={{
                sx: {
                  width: "15.625rem",
                  mt: marginTop,
                  Height: "100%",
                },
              }}
            >
              <Box
                sx={{
                  width: 250,
                  background:
                    "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
                  minHeight: "110vh",
                  color: "white",
                  overflowY: "scroll",
                }}
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem
                      key={page.name}
                      component={Link}
                      to={page.sname}
                      sx={{
                        color: "white",
                        backgroundColor:
                          location.pathname === page.sname
                            ? "rgba(255, 255, 255, 0.2)"
                            : "transparent",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <ListItemText primary={page.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.sname}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "inherit",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
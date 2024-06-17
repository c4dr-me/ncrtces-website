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
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./navbar.css";

const pages = [
  { name: "Overview", sname: "overview" },
  { name: "About Us", sname: "about" },
  { name: "Tracks", sname: "track" },
  { name: "Submission", sname: "sub" },
  { name: "Committee", sname: "commit" },
  { name: "Schedule", sname: "schedule" },
  { name: "Registration", sname: "reg" },
  { name: "Patrons", sname: "patron" },
  { name: "Contact Us", sname: "contact" },
];
const ForwardedScrollLink = React.forwardRef((props, ref) => (
  <div ref={ref}>
  <ScrollLink {...props} />
</div>
)); // this function is used for forwarding the ref of custom elemtns i.e which are not native elements like listitems and buttons from react mui

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // const [marginTop, setMarginTop] = React.useState("0px");

  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

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
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo should always be visible */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://msit.in/static/img/msit.png"
              alt="Logo"
              style={{ height: "50px", width: "50px", marginRight: "5px" }}
            />
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
                component={ForwardedScrollLink}
                to={page.sname}
                spy={true}
                smooth={true}
                duration={500}
                offset={-66}
                activeClass="active"
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{
                transform: drawerOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 200ms ease-in",
                display: { md: "none" }, // Hide on larger screens
              }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              PaperProps={{
                sx: {
                  width: "60vw",
                  maxWidth: "400px",
                  // mt: marginTop,
                  height: "100%",
                  overflow: "hidden",
                },
              }}
            >
              <Box
                sx={{
                  width: "inherit",
                  background:
                    "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
                  minHeight: "100vh",
                  color: "white",
                  overflow: "hidden",
                }}
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <IconButton
                  size="large"
                  aria-label="close drawer"
                  onClick={handleCloseDrawer}
                  color="inherit"
                  sx={{
                    position: "absolute",
                    top: "0.2rem",
                    right: "0",
                  }}
                >
                  <CloseIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    mt: 6,
                  }}
                >
                  {pages.map((page) => (
                    <ListItem
                      key={page.name}
                      component={ForwardedScrollLink}
                      to={page.sname}
                      spy={true}
                      smooth={true}
                      duration={500}
                      activeClass="active"
                      sx={{
                        color: "white",
                        backgroundColor:
                           "transparent",
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
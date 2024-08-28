import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as ScrollLink, scroller, Events } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Logo from './Logo.jpg';
import "./navbar.css";

const pages = [
  { name: "Home", sname: "main" },
  { name: "About Us", sname: "about" },
  { name: "Tracks", sname: "track" },
  { name: "Committee", sname: "committee" },
  { name: "Call for Papers", sname: "cfp" },
  { name: "Guidelines", sname: "guide" },
  { name: "Schedule", sname: "schedule" },
  { name: "Registration", sname: "reg" },
  { name: "Contact Us", sname: "contact" },
  { name: "Venue", sname: "venue" },
];

const ForwardedScrollLink = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <ScrollLink {...props} />
  </div>
));

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [guidelinesMenuOpen, setGuidelinesMenuOpen] = React.useState(false);
  const [guidelinesActive, setGuidelinesActive] = React.useState(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleGuidelinesClick = (event) => {
    setAnchorEl(event.currentTarget);
    setGuidelinesMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setGuidelinesMenuOpen(false);
  };

  const handleMenuItemClick = (section) => {
    handleMenuClose();
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
    });
  };

  React.useEffect(() => {
    if (isLargeScreen && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isLargeScreen, drawerOpen]);

  React.useEffect(() => {
    // Select the guide section by its ID
    const guideSection = document.getElementById('guide');
  
    // Create an IntersectionObserver instance to monitor the visibility of the guide section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the guide section is in view based on the threshold
        if (entry.isIntersecting) {
          // If in view, set guidelinesActive state to true
          setGuidelinesActive(true);
        } else {
          // If not in view, set guidelinesActive state to false
          setGuidelinesActive(false);
        }
      },
      {
        // Threshold defines how much of the section should be visible for the callback to trigger
        threshold: 0.1, // 10% visibility triggers the callback (adjust this value as needed)
      }
    );
  
    // Start observing the guide section
    if (guideSection) {
      observer.observe(guideSection);
    }
  
    // Cleanup the observer when the component unmounts to prevent memory leaks
    return () => {
      if (guideSection) {
        observer.unobserve(guideSection);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  React.useEffect(() => {
    // Select the guide section by its ID
    const guideSection = document.getElementById('guide');
  
    // Create an IntersectionObserver instance to monitor the visibility of the guide section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the guide section is in view based on the threshold
        if (entry.isIntersecting) {
          // If in view, set guidelinesActive state to true
          setGuidelinesActive(true);
        } else {
          // If not in view, set guidelinesActive state to false
          setGuidelinesActive(false);
        }
      },
      {
        // Threshold defines how much of the section should be visible for the callback to trigger
        threshold: 0.1, // 10% visibility triggers the callback (adjust this value as needed)
      }
    );
  
    // Start observing the guide section
    if (guideSection) {
      observer.observe(guideSection);
    }
  
    // Cleanup the observer when the component unmounts to prevent memory leaks
    return () => {
      if (guideSection) {
        observer.unobserve(guideSection);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
    
  

  React.useEffect(() => {
    const handleSetActive = (to) => {
      if (["guide", "submission-guideline", "author-guideline"].includes(to)) {
        setGuidelinesActive(true);
      } else {
        setGuidelinesActive(false);
      }
    };
    

    Events.scrollEvent.register("begin", handleSetActive);
    Events.scrollEvent.register("end", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin", handleSetActive);
      Events.scrollEvent.remove("end", handleSetActive);
    };
  }, []);

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
        width: "100vw",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://msit.in/static/img/msit.png"
              alt="Logo"
              style={{ height: "50px", width: "50px", marginRight: "5px" }}
            />
          </Box> */}
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
                component={page.sname !== "guide" ? ForwardedScrollLink : ""}
                to={page.sname !== "guide" ? page.sname : null}
                spy={true}
                smooth={true}
                duration={500}
                offset={page.sname === "about" || "track"
                  ? -10
                  : page.sname === "reg" || "schedule"
                    ? -20
                    : page.sname === "contact"
                      ? -10
                      : page.sname === "committee"
                      ? -15
                        : page.sname === "cfp" 
                          ? -5
                            : -50
                }
                activeClass={page.sname !== "guide" ? "active" : ""}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "inherit",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                  position: "relative",
                }}
                onClick={page.sname === "guide" ? handleGuidelinesClick : null}
                className={guidelinesActive && page.sname === "guide" ? "active" : ""}
              >
                {page.name}
                {page.sname === "guide" && (
                  <ArrowDropDownIcon
                    sx={{
                      ml: 1,
                      transform: guidelinesMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease-in",
                    }}
                  />
                )}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Conference Logo"
              style={{ height: "60px", width: "60px", marginRight: "5px", borderRadius: "50%" }}
            />
          </Box> */}
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
                display: { md: "none" },
              }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: {
                  width: "60vw",
                  maxWidth: "400px",
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
                        backgroundColor: "transparent",
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

      {/* Guidelines Menu */}
      <Menu
        id="guidelines-menu"
        anchorEl={anchorEl}
        open={guidelinesMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPaper-root': {
            background: "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
            mt: 2,
          },
          "& .MuiMenu-list": { //dropdwon list container
            padding: "10px",
          },
          "& .MuiMenuItem-root": { //li item
          backdropFilter: "blur(10px)",
          color: "white",
          fontWeight: "400",
          borderRadius: "8px",
          margin: "0 2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        }}
      >
    
        <MenuItem
           component={ForwardedScrollLink}
           to="submission-guideline"
           spy={true}
           smooth={true}
           duration={500}
           activeClass="active"
          onClick={() => handleMenuItemClick("submission-guideline")}>
          Submission Guideline
        </MenuItem>
        <MenuItem
           component={ForwardedScrollLink}
           to="author-guideline"
           spy={true}
           smooth={true}
           duration={500}
           activeClass="active"
          onClick={() => handleMenuItemClick("author-guideline")}>
          Author Guideline
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default ResponsiveAppBar;
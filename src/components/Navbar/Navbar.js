import React, { useEffect, useState } from "react";
import {Avatar, Button,Typography} from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if(token){
      const decodedToken = jwtDecode(token)
      if(decodedToken.exp*1000<new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    // <AppBar className={classes.appBar} position="sticky" color="inherit">
    //   <div className={classes.brandContainer}>
    //     <Typography
    //       component={Link}
    //       to="/"
    //       className={classes.heading}
    //       variant="h2"
    //       align="center"
    //     >
    //       Memories
    //     </Typography>
    //     <img className={classes.image} src={memories} alt="" height="60" />
    //   </div>
    //   <Toolbar className={classes.toolbar}>
    //     {user ? (
    //       <div className={classes.profile}>
    //         <Avatar
    //           className={classes.purple}
    //           alt={user.result.name}
    //           src={user.result.imageUrl}
    //         >
    //           {user.result.name.charAt(0)}
    //         </Avatar>
    //         <Typography className={classes.userName} variant="h6">
    //           {user.result.name}
    //         </Typography>
    //         <Button
    //           variant="contained"
    //           className={classes.logout}
    //           color="secondary"
    //           onClick={logout}
    //         >
    //           Logout
    //         </Button>
    //       </div>
    //     ) : (
    //       <Button
    //         component={Link}
    //         to="/auth"
    //         variant="contained"
    //         color="primary"
    //       >
    //         Sign In
    //       </Button>
    //     )}
    //   </Toolbar>
    // </AppBar>

    <nav class="navbar navbar-expand-lg navbar-light bg-white mb-5 mt-md-3" style={{borderRadius:'10px',boxShadow:'2px 1px 13px -1px rgba(0,0,0,0.76)'}}>
  <div class="container">
    <div className="d-flex align-items-center">
      <Link class="navbar-brand fs-1 fw-bolder text-primary" to="/">Memories</Link>
      <img className={classes.image} src={memories} alt="" height="60" />
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2">
             {user ? (
          <li className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </li>
        ) : (
          <li>
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          </li>
        )}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

import { Avatar, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';
const Auth = () => {
    const classes = useStyles()
    const isSignup = false;
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    return (
        <Container component="main" maxWidth="xs">
               <Paper className={classes.paper} elevation={3}>
                   <Avatar className={classes.avatar}>
                        <LockOutlined/>
                   </Avatar>
                   <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                   <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <TextField name="firstName" label="First Name"
                                        handleChange={handleChange}
                                    </>
                                )
                            }
                        </Grid>
                   </form>
                </Paper> 
        </Container>
    );
};

export default Auth;
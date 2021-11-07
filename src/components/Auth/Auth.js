import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Input from './Input';
import useStyles from './styles';
const Auth = () => {
    const classes = useStyles()
    const [showPassowrd, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }
    const switchMode = () => {
        setIsSignUp((prevIsSignup)=>!prevIsSignup);
        handleShowPassword(false);
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
                                        <Input name="firstName" label="First Name"
                                        handleChange={handleChange} autoFocus half />
                                        <Input name="firstName" label="First Name"
                                        handleChange={handleChange} half/>
                                    </>
                                )
                            }
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassowrd ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                        <Grid container justifyContent="flex-end">
                            <Grid>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In': "Don't have a account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                   </form>
                </Paper> 
        </Container>
    );
};

export default Auth;
'use client'
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import styles from './Register.module.css'
import Copyright from './Copyright'

const Register = () => {
    const router = useRouter();

    const handelAccount = (property: any, event: any) => {
        console.log("handelAccount");
    }

    const handelLoginSubmit = () => {
        router.push('/dashboard')
    };
  return (
      <Container component="main" maxWidth="xs">
          <Grid item xs={false} sm={4} md={7} />
          <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={1}
              square
          >
              <div className={styles.size}>
                  <Avatar>
                      <LockOutlined />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                      Sign Up
                  </Typography>
                  <form>
                      <TextField
                          onChange={(event) => handelAccount("username", event)}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoFocus
                      />
                      <TextField
                          onChange={(event) => handelAccount("password", event)}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                      />
                      <TextField
                          onChange={(event) => handelAccount("password", event)}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="confirmpassword"
                          label="confirm password"
                          type="confirmpassword"
                          id="confirmpassword"
                          autoComplete="confirm-password"
                      />
                      <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                      />
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={handelLoginSubmit}
                      >
                          Sign In
                      </Button>
                      <Grid container>
                          <Grid item>
                              <Link href="/" variant="body2">
                                  {"Already have an account? Sign in"}
                              </Link>
                          </Grid>
                      </Grid>
                      <Box mt={5}>
                          <Copyright />
                      </Box>
                  </form>
              </div>
          </Grid>
      </Container>
  )
}

export default Register

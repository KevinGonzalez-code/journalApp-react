import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
   
      <AuthLayout title="Create account">

<form>
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                type="text"
                placeholder="Your name"
                fullWidth
              />
            </Grid>

            
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@email.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="*********"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} md={6}>
                <Button
                  variant='contained'
                  fullWidth
                >
                  Create account
                </Button>
              </Grid>

              

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}> Do you have an account? </Typography>
              <Link color="inherit" to="/auth/login" component={RouterLink}>
                Log in
              </Link>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>

        
    
  )
}

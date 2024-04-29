import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
              Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
      </Typography>
  )
}

export default Copyright

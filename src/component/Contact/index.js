import React from 'react'
import Contactform from './Contactform'
import { Box, Paper, Grid, CardMedia } from '@mui/material';

export default function index() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box >
            <img src='https://img.freepik.com/free-vector/woman-receiving-mail-reading-letter_74855-5964.jpg?w=1380&t=st=1667471433~exp=1667472033~hmac=7a4f72f547321ad59dca20f0670b0c07348f90c4481d19cdcf55d0e695b5282a' style={{width: '100%'}}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Contactform />
        </Grid>

      </Grid>
    </div>
  )
}

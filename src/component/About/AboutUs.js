import * as React from 'react';
import { Box, Chip, Stack, Grid, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';

export default function AboutUs() {
  return (
    <div>
      <Typography gutterBottom variant="h3" sx={{ ml: 100 }}>
        About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box >
            <img src='https://img.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg?w=1380&t=st=1667472404~exp=1667473004~hmac=54fe55400dfc76e152ca5e46c7737f2509dfa58e1d2067cbb3326e1ab3de80c3' style={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 8, fontSize: 19, mr: 5 }} >
            <Stack direction="row" spacing={100}  >
              <Chip label="Artical" color='primary' size='medium' />
              <br />
              <br />
            </Stack>

            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <hr />
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>

      </Grid>
      <Box>
        <img src='https://img.freepik.com/free-vector/isometric-positive-negative-parenting-background-with-editable-text-description-slider-button-human-characters-illustration_1284-28915.jpg?size=626&ext=jpg&ga=GA1.2.1469826881.1663232819&semt=sph' width={'80%'} height={'700'}  />
      </Box>
    </div>
  );
}

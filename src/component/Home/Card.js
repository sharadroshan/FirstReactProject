import * as React from 'react';
import { CardActionArea, Grid, Paper, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ActionAreaCard(props) {

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200"
                  height="300"
                  image="https://www.hdwallpapers.in/download/stephen_curry_20_hd_sports-2560x1440.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Commodo laboris deserunt tempor officia magna aute culpa.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200"
                  height="300"
                  image="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHNwb3J0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Commodo laboris deserunt tempor officia magna aute culpa.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={4} >
          <Item>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200"
                  height="300"
                  image="https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Commodo laboris deserunt tempor officia magna aute culpa.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

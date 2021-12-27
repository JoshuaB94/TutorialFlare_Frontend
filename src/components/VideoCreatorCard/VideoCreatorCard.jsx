import './VideoCreatorCard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';

const VideoCreatorCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }} className="vc-profile-card">
      <CardActionArea>
        <Avatar src="/broken-image.jpg" sx={{width: 150, height: 150}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}

export default VideoCreatorCard;

import './VideoCreatorCard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import { AiFillYoutube, AiOutlineTwitter, AiFillMail } from 'react-icons/ai'

const VideoCreatorCard = () => {
  return (
    <Card sx={{ maxWidth: 350 }} className="vc-profile-card">
      <CardActionArea>
        <Avatar src="/broken-image.jpg" sx={{width: 90, height: 90}} className="card-avatar"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className="card-name">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary" className="card-location">
            City, State
          </Typography>
          <div className="card-social-links">
            <AiFillYoutube className="youtube-icon" />
            <AiOutlineTwitter className="twitter-icon"/>
            <AiFillMail className="mail-icon" />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation size="small" className="profile-button">View Profile</Button>
      </CardActions>
    </Card>
  );
}

export default VideoCreatorCard;

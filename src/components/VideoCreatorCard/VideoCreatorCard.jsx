import './VideoCreatorCard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActions } from '@mui/material';
import { TiSocialYoutube, TiSocialTwitter, TiMail } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const VideoCreatorCard = () => {
  const [profile, getProfile] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3200/api/video-creator/profile`)
    .then(res => {
      console.log(res)
      getProfile(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);


  return (
    <div className="profile-cards">
      {profile.map((creatorprofile) => (
      <Card sx={{ maxWidth: 350 }} className="vc-profile-card" key={creatorprofile._id}>
          <Avatar src={creatorprofile.Image} sx={{width: 90, height: 90}} className="card-avatar"/>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="card-name">
              {creatorprofile.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="card-location">
              {creatorprofile.Location}
            </Typography>
            <div className="card-social-links">
              <a href={creatorprofile.SocialLinks.Youtube} target="_blank" rel="noopener noreferrer"><TiSocialYoutube className="youtube-icon" /></a>
              <a href={creatorprofile.SocialLinks.Twitter} target="_blank" rel="noopener noreferrer"><TiSocialTwitter className="twitter-icon"/></a>
              <a href={`mailto:${creatorprofile.SocialLinks.emailAddress}`}><TiMail className="mail-icon" /></a>
            </div>
          </CardContent>
        <CardActions>
            <Button variant="contained" disableElevation size="small" className="profile-button" component={Link} to={'/videocreator/profile'}>View Profile</Button>
        </CardActions>
      </Card>
      ))}
    </div>
  );
}

export default VideoCreatorCard;

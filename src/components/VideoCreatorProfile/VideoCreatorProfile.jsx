import './VideoCreatorProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { TiSocialYoutube, TiSocialTwitter, TiMail } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const VideoCreatorProfile = () => {
    const [profile, setProfile] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/video-creator/61d5d75258969c4f916422c7/profile`)
        .then(res => {
            console.log(res)
            setProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return ( 
        <div>
            <div className="vc-profilepage">

                {profile &&
                    <div className="vc-profilebar">
                        <div className="vc-profilecontainer">
                            <Avatar src="/broken-image.jpg" sx={{width: 180, height: 180}} className="vc-avatar" />
                            <div className="vc-basicinfo">
                                <h3>{profile.Name}</h3>
                                <p>{profile.Location}</p>
                            </div>
            
                            <div className="vc-skills">
                                <div>{profile.Skills.skillOne}</div>
                                <div>{profile.Skills.skillTwo}</div>
                                <div>{profile.Skills.skillThree}</div>
                            </div>

                            <div className="vc-socials">
                                <a href={profile.SocialLinks.Youtube} target="_blank" rel="noopener noreferrer"><TiSocialYoutube /></a>
                                <a href={profile.SocialLinks.Twitter} target="_blank" rel="noopener noreferrer"><TiSocialTwitter /></a>
                                <a href={`mailto:${profile.SocialLinks.emailAddress}`}><TiMail /></a>
                            </div>
                            <Link to="/hiremeform" className="hire-me">
                                <button className="hire-button">Hire Me</button>
                            </Link> 
                        </div>  
                    </div>
                }

                <div className="vc-showcase">
                    <h3>My Latest Video Tutorials</h3>
                    <div className="vc-videos">
                        <p>This is where the videos will live!</p>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default VideoCreatorProfile;
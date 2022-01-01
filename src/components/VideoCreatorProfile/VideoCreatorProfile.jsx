import './VideoCreatorProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { Avatar } from '@mui/material';
import { TiSocialYoutube, TiSocialTwitter, TiMail } from 'react-icons/ti';

const VideoCreatorProfile = () => {
    const [profile, getProfile] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/video-creator/profile`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    });

    return ( 
        // <div>
        //     <NavBar />
        //     <div className="vc-profilepage">
        //         <div className="vc-profilebar">
        //             <Avatar src="/broken-image.jpg" sx={{width: 180, height: 180}} className="vc-avatar" />
        //             <div className="vc-profilecontainer">
        //                 <div className="vc-basicinfo">
        //                     <h3>Creator Name Goes Here</h3>
        //                     <p>City, State</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur and some gibberish for the remainder of this placeholder text area.</p>
        //                 </div>
        //                 <div className="vc-skills">
        //                     <div>Video Skill 1</div>
        //                     <div>Video Skill 2</div>
        //                     <div>Video Skill 3</div>
        //                 </div>
        //                 <div className="vc-socials">
        //                     <TiSocialYoutube />
        //                     <TiSocialTwitter />
        //                     <TiMail />
        //                 </div>
        //             </div> 
        //             <div className="hire-me">
        //                 <button className="hire-button">Hire Me</button>
        //             </div>   
        //         </div>

        //         <div className="vc-showcase">
        //             <h3>My Latest Video Tutorials</h3>
        //             <div className="vc-videos">
        //                 <p>This is where the videos will live!</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <p>
            {profile.map((videoCreator) => (
                <div key={videoCreator._id}>
                    <p>{videoCreator.videoCreatorName}</p>
                    <p>{videoCreator.videoCreatorLocation}</p>
                    <p>{videoCreator.videoCreatorSkill}</p>
                    <p>{videoCreator.videoCreatorName}</p>
                </div>
            ))}
            </p>
        </div>
     );
}
 
export default VideoCreatorProfile;
import './VideoCreatorProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { TiSocialYoutube, TiSocialTwitter, TiMail } from 'react-icons/ti';
import { AiFillCloseCircle } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import UserRating from '../RateUser/RateUser';
import Modal from 'react-modal';
import HireMeForm from '../HireMeForm/HireMeForm';
// import apiKey from '../apiKey'

Modal.setAppElement('#root')

const VideoCreatorProfile = () => {
    const [profile, setProfile] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [videoPlaylist, setVideoPlaylist] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/video-creator/61dc2eb79d5f398b275a14e0/profile`)
        .then(res => {
            console.log(res)
            setProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

//    useEffect(() => {
//         axios
//         .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAEcJNQ_UtvT2j3j7uPtgmtorvFjJQPZ6&key=${apiKey}&maxResults=3`)
//         .then(res => {
//             console.log(res)
//             setVideoPlaylist(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }, []);

    

     

    return ( 
        <div>
            <div className="vc-profilepage">

                {profile &&
                    <div className="vc-profilearea">
                        <div className="vc-profilecontainer">
                            <Avatar src={`http://localhost:3200/${profile.Image}`} sx={{width: 180, height: 180}} className="vc-avatar" />
                            <div className="vc-basicinfo">
                                <h3>{profile.Name}</h3>
                                <p>{profile.Location}</p>
                            </div>
            
                            <div className="vc-skills">
                                <div className="vc-skill">{profile.Skills.skillOne}</div>
                                <div className="vc-skill">{profile.Skills.skillTwo}</div>
                                <div className="vc-skill">{profile.Skills.skillThree}</div>
                            </div>

                            <div className="vc-socials">
                                <a href={profile.SocialLinks.Youtube} target="_blank" rel="noopener noreferrer" className="social-icon"><TiSocialYoutube /></a>
                                <a href={profile.SocialLinks.Twitter} target="_blank" rel="noopener noreferrer" className="social-icon"><TiSocialTwitter /></a>
                                <a href={`mailto:${profile.SocialLinks.emailAddress}`} className="social-icon"><TiMail /></a>
                            </div>
                            
                            <button className="hire-button" onClick={() => setModalIsOpen(true)}>Hire Me</button>
            
                            <div className="rating-bar">
                            <UserRating />
                            </div>
                        </div>  

                        <div className="vc-showcase">
                            <h3>My Latest Video Tutorials</h3>
                            <div className="vc-videos">
                                <ReactPlayer url='https://youtu.be/8YWrmZoUYGs' width="420px" height="320px"/>
                                <ReactPlayer url='https://youtu.be/DYtYyFOfpBY' width="420px" height="320px"/>
                                <ReactPlayer url='https://youtu.be/JKOwJUM4_RM' width="420px" height="320px"/>
                            </div>

                            <h3>My Submissions</h3>
                            <div className="submitted-projects">   
                                <ReactPlayer 
                                url='http://localhost:3200/uploads/videos/045fa1f0-7227-11ec-805c-b91f9fa41333.mp4'
                                controls='true' width="420px" height="320px"/>
                                <ReactPlayer 
                                url='http://localhost:3200/uploads/videos/c4025590-7220-11ec-96c8-55aa5856392d.mp4'
                                controls='true' width="420px" height="320px"/>
                                <ReactPlayer 
                                url='http://localhost:3200/uploads/videos/da69ced0-7220-11ec-96c8-55aa5856392d.mp4'
                                controls='true' width="420px" height="320px"/>
                            </div>
                        </div>

                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="hire-me-modal"
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.89)'
                                }
                            }}
                        >
                            <div className="modal-close-button"><AiFillCloseCircle onClick={() => setModalIsOpen(false)} className="modal-close"/></div>
                            <h2>Send your Hiring Request</h2>
                            <HireMeForm />
                        </Modal>
                    </div>
                    
                }
            </div>
        </div>
     );
}
 
export default VideoCreatorProfile;
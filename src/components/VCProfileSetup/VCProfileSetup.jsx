import './VCProfileSetup.css';
import axios from 'axios';
import { useState } from 'react';

const VCProfileSetup = () => {
    const [Name, setupName] = useState("");
    const [Location, setupLocation] = useState("");
    const [skillOne, setupSkillOne] = useState("");
    const [skillTwo, setupSkillTwo] = useState("");
    const [skillThree, setupSkillThree] = useState("");
    const [Youtube, setupYoutube] = useState("");
    const [Twitter, setupTwitter] = useState("");
    const [emailAddress, setupEmailAddress] = useState("");
    const [Image, setupImage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const postVCProfile = {
            Name: Name,
            Location: Location,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree,          
            Youtube: Youtube,
            Twitter: Twitter,
            emailAddress: emailAddress,
            Image: Image
        }

        let response = await axios.post(`http://localhost:3200/api/video-creator/61d5d75258969c4f916422c7/profile-setup`, postVCProfile);
        if (response.status === 200) {
            console.log(response.data);
            window.location = '/videocreator/profile'
        }

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }
    }

    return ( 
        <div className="vc-profilesetup">
            <form className="vc-profile-form" onSubmit={handleSubmit}>
                <h1 className="vc-profilesetup-heading">Setup Video Creator Profile</h1>
                <label>What is your name?</label>
                    <input placeholder="John Doe" type="text" value={Name} onChange={(e) => setupName(e.target.value)}/>
                <label>Where are you located?</label>
                    <input placeholder="City, State" type="text" value={Location} onChange={(e) => setupLocation(e.target.value)}/>
                <label>What are your top 3 video-related skills?</label>
                    <input placeholder="Enter 1st Skill" type="text" value={skillOne} onChange={(e) => setupSkillOne(e.target.value)}/>
                    <input placeholder="Enter 2nd Skill" type="text" value={skillTwo} onChange={(e) => setupSkillTwo(e.target.value)}/>
                    <input placeholder="Enter 3rd Skill" type="text" value={skillThree} onChange={(e) => setupSkillThree(e.target.value)}/>
                <label>Social Links</label>
                    <input placeholder="Enter your Youtube Channel link" type="text" value={Youtube} onChange={(e) => setupYoutube(e.target.value)}/>
                    <input placeholder="Enter your Twitter link" type="text" value={Twitter} onChange={(e) => setupTwitter(e.target.value)}/>
                    <input placeholder="Enter your best Email Address" type="text" value={emailAddress} onChange={(e) => setupEmailAddress(e.target.value)}/>
                <label for="imagefile">Select an image:</label>
                    <input type="file" id="imagefile" value={Image} onChange={(e) => setupImage(e.target.value)}/>
                <button className="vc-profilesetup-button" type="submit">Create Profile</button>
            </form>
        </div>
     );
}
 
export default VCProfileSetup;
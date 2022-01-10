import './CoProfileSetup.css';
import axios from 'axios';
import { useState } from 'react';

const CoProfileSetup = () => {
    const [CompanyName, setupCompanyName] = useState("");
    const [Mission, setupMission] = useState("");
    const [Bio, setupBio] = useState("");
    const [Website, setupWebsite] = useState("");
    const [Image, setupImage] = useState("");
    
    async function handleSubmit(e){
        e.preventDefault();

        const postCompanyProfile = {
            CompanyName: CompanyName,
            Mission: Mission,
            Bio: Bio, 
            Website: Website, 
            Image: Image
        }

        let response = await axios.post(`http://localhost:3200/api/company/61dc30389d5f398b275a14e4/profile-setup`, postCompanyProfile);
        if (response.status === 200) {
            console.log(response.data);
            window.location = '/company/profile'
        }

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }
    }
    
    return (  
        <div className="company-profilesetup">
            <form className="company-profile-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className="company-profilesetup-heading">Setup Company Profile</h1>
                <label>Company Name</label>
                    <input placeholder="Your Company Name LLC" type="text" value={CompanyName} onChange={(e) => setupCompanyName(e.target.value)}/>
                <label>Write Company Mission Statement</label>
                    <textarea placeholder="Enter your Company's Mission Statement (Max Length: 1500 Characters)" type="text" rows="3" cols="100" value={Mission} onChange={(e) => setupMission(e.target.value)}/>
                <label>Write Company Bio</label>
                    <textarea placeholder="Enter your Company's Bio (Max Length: 1500 Characters)" type="text" rows="6" cols="100" value={Bio} onChange={(e) => setupBio(e.target.value)}/>
                <label>Company Website</label>
                    <input placeholder="Enter your Company's Website" type="text" value={Website} onChange={(e) => setupWebsite(e.target.value)}/>
                <label for="imagefile">Select an image:</label>
                    <input type="file" id="imagefile" value={Image} name="Image" onChange={(e) => setupImage(e.target.value)}/>
                <button className="company-profilesetup-button" type="submit">Create Profile</button>
            </form>
        </div>
    );
}
 
export default CoProfileSetup;
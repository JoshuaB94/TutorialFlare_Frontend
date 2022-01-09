import './CompanyProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CompanyProfile = () => {
    const [profile, setProfile] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/company/61da8ab2d438f5310411f6e8/profile`)
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
            <div className="company-profilepage">

                {profile &&
                    <div className="company-profileinfo">
                        <div className="company-banner">
                            {profile.CompanyName}
                        </div>
                        <div className="company-mission">
                            <h4>Mission</h4>
                            <p>{profile.Mission}</p>
                        </div>
                        <div className="company-bio">
                            <h4>Bio</h4>
                            <p>{profile.Bio}</p>
                        </div>
                        <div className="company-website">
                            <h4>Website</h4>
                            <a href={profile.Website} target="_blank" rel="noopener noreferrer">Click to Visit Company Website</a>
                        </div>
                    </div>
                }

            </div>
        </div>
     );
}
 
export default CompanyProfile;
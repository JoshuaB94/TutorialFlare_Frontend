import './CompanyProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CompanyProfile = () => {
    const [profile, getProfile] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/company/profile`)
        .then(res => {
            console.log(res)
            getProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return ( 
        <div>
            <div className="company-profilepage">
                {profile.map((companyprofile) => (
                    <div className="company-profileinfo" key={companyprofile._id}>
                        <div className="company-banner">{companyprofile.CompanyName}</div>
                        <div className="company-mission">
                            <h4>Mission</h4>
                            <p>{companyprofile.Mission}</p>
                        </div>
                        <div className="company-bio">
                            <h4>Bio</h4>
                            <p>{companyprofile.Bio}</p>
                        </div>
                        <div className="company-website">
                            <h4>Website</h4>
                            <a href={companyprofile.Website} target="_blank" rel="noopener noreferrer">Click to See Company Website</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default CompanyProfile;
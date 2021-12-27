import './HireVCSection.css';
import * as React from 'react';
import { Container } from '@mui/material';

const HireVCSection = () => {
    return (
        <Container className="hiring-section" maxWidth="fluid">
            <div className="hiring-heading-area">
                <h2 className="hiring-heading">Hire a Video Tutorial Creator</h2>
                <p className="hiring-subtext">Click on a Creator Card to view more information about the Video Tutorial Creator and if he/she is a right fit for your company's need.</p>
            </div>
            {/* Filter Dropdown would go here. Might consider creating a Filter Dropdown component */}
        </Container>
    );
}

export default HireVCSection;
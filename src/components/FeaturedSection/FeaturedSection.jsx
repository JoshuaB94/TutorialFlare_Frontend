import './FeaturedSection.css';
import * as React from 'react';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

const FeaturedSection = () => {
    return ( 
        <Container className="featured-section" maxWidth="fluid">
            <Grid container className="featured-grid">
                <Grid className="featured-creator-cta" md={6}>
                    <h2>Featured Tutorial Flare Creator</h2>
                    <p>This is where the small text snippet of the video creator will go and to also fulfill good SEO practices.</p>
                    <Button variant="contained" disableElevation size="large">Clicky Button</Button>
                </Grid>
                <Grid className="featured-creator-image" md={4}>
                    <Avatar src="/broken-image.jpg" sx={{width: 320, height: 320}} />
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default FeaturedSection;
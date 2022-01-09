import './CreatorDropdownFilter.css';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CreatorDropdownFilter = () => {
    return ( 
        <div className="dropdown-filter">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="skill-filter">
                    Filter by Skill
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-filter-menu">
                    <Dropdown.Item href="#/action-1">Video Editing</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Motion Graphics</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">VoiceOver</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Transcription</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Scripting</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Thumbnail Design</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
     );
}
 
export default CreatorDropdownFilter;

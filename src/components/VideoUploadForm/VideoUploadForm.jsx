import React, { useState }from 'react';
import './VideoUploadForm.css';
import axios from 'axios';

const VideoUploadForm = () => {
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const postVideoUpload = {
            title: title,
            video: video
        }

        let response = await axios.post(`http://localhost:3200/api/video-creator/61d5c57ebf2732451fd7bb80/upload`, postVideoUpload);
        if (response.status === 200) {
            console.log(response.data);
            window.location = '/videocreator/profile'
        }

        if (response.status === 400) {
            console.log(`There is an error: ${response.error}`)
        }
    }


    return ( 
        <form className="upload-form" action="/:_id/upload" method="post" encType="multipart/data-form" onSubmit={handleSubmit}>
            <input placeholder="Video Title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="videofile">Upload a Video</label>
            <input type="file" id="videofile" accept=".mp4, .mov" name="video" value={video} onChange={(e) => setVideo(e.target.value)}/>
            <button type="submit">Upload</button>
        </form>
     );
}
 
export default VideoUploadForm;
import React from 'react';
import video from './clip.mp4';
import './index.css';

export default function About(props) {
    return (
        <div className={props.id}>
            <div className="section-content" id={props.id}>
                <div className="content">
                <video controls={true} loop width="800px   ">
                    <source src={video} type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    );
};
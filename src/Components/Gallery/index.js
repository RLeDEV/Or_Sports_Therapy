import React from 'react';
import Gallery from './Gallery';
import './index.css';

export default function GallerySec(props) {
    return (
        <div className={props.id + (props.dark ? " section-dark" : "")}>
            <div className="title">
                <div id="triangle-topleft" />
                <span>גלריית תמונות</span>
                <div id="triangle-bottomright" />
            </div>
            <div className="content">
                <Gallery />
            </div>
        </div>
    );
};
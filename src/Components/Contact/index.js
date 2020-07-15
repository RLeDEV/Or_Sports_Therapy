import React from 'react';
import './index.css';

export default function Contact(props) {
    return (
        <div className={props.id}>
            <div className="section-content" id={props.id}>
                <div className="title">
                    <div id="triangle-topleft" />
                    <span>צור קשר</span>
                    <div id="triangle-bottomright" />
                </div>
                <div className="content">
                    <div className="contact-form">
                            <div className="personal-info">
                                <div className="portfolio-img"/>
                                <div className="icons">
                                    <i className="fa fa-map-marker"><span className="form-info">קרל נטר 16, ראשון לציון</span></i>
                                    <i className="fa fa-phone"><span className="form-info">052-6899504</span></i>
                                    <i className="fa fa-envelope"><span className="form-info">kdosha47@gmail.com</span></i>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <input type="text" placeholder="שם מלא" required/>
                                    <input type="text" placeholder="טלפון" required/>
                                    <input type="text" placeholder="אימייל" required/>
                                    <textarea name="message" placeholder="תוכן ההודעה" rows="5" required />
                                    <center>
                                        <div className="submit">
                                            <span>שלח הודעה</span>
                                        </div>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};